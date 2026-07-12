(function (global) {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const el = (t, a) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); return e; };
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  const STYLE_ID = "viola-funnel-style";
  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = `
      .vf-root{ font-family:var(--font-sans,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif);
        background:transparent; color:#0F0E0B; width:100%; margin:0; }
      .vf-title{ font-family:var(--font-serif,Georgia,serif); font-weight:400; font-size:34px; line-height:1;
        letter-spacing:-0.02em; color:#0F0E0B; text-align:center; margin:10px auto 0; opacity:1;
        transition:opacity .28s ease-in-out; }
      .vf-svg{ width:100%; height:auto; display:block; overflow:visible; }
      .vf-svg text{ font-family:var(--font-mono,"Akkurat Mono",ui-monospace,monospace); letter-spacing:0.02em; }
      .vf-svg .vf-hit{ cursor:pointer; }
      .vf-svg .vf-ringpath, .vf-svg .vf-rlabel{ transition:stroke .4s ease-in-out, stroke-width .4s ease-in-out, fill .4s ease-in-out; }
      .vf-desc{ font-family:var(--font-sans,inherit); font-size:var(--text-lg,1rem); line-height:1.5; color:rgba(15,14,11,0.72);
        margin:10px auto 0; max-width:460px; text-align:center; min-height:108px; opacity:1; transition:opacity .28s ease-in-out; }
    `;
    document.head.appendChild(s);
  }

  function initViolaFunnel(root) {
    ensureStyle();
    const INK = "#0F0E0B", LINE = "#a6a6a6", DIM = "#d2d2d2", BACKSEL = "#9e9e9e";
    const cx = 240;
    const L = { capital: { cy: 156, rx: 188, ry: 55 }, customers: { cy: 246, rx: 150, ry: 44 }, clarity: { cy: 300, rx: 112, ry: 33 } };
    const COLORS = { clarity: "#CCFBC9", customers: "#AED2EA", capital: "#BEFF30" };
    const DESC = {
      clarity: "We work with founders to pressure-test product-market fit, sharpen the ICP, and tighten GTM motion so the team knows what wins next.",
      customers: "We offer curated access to hundreds of real buyers, design partners, and operators who can validate the wedge and convert when the product is ready.",
      capital: "Capital goes far beyond funding. We help founders shape the early syndicate, bring in key talent and advisors, and position for the right next capital when timing creates leverage.",
    };
    const apex = { x: cx, y: 352 };

    root.classList.add("vf-root");
    root.innerHTML =
      '<svg class="vf-svg" viewBox="0 0 512 480" role="img" aria-label="Three C funnel diagram"></svg>'
      + '<h3 class="vf-title">The three Cs</h3>'
      + '<p class="vf-desc">Hover a ring to read its principle.</p>';

    const svg = root.querySelector(".vf-svg");
    const desc = root.querySelector(".vf-desc");
    const title = root.querySelector(".vf-title");

    const defs = el("defs", {});
    const grad = el("linearGradient", { id: "vfAxisGrad", gradientUnits: "userSpaceOnUse", x1: cx, y1: 432, x2: cx, y2: 88 });
    grad.appendChild(el("stop", { offset: "0%", "stop-color": LINE, "stop-opacity": "0.05" }));
    grad.appendChild(el("stop", { offset: "100%", "stop-color": LINE, "stop-opacity": "1" }));
    defs.appendChild(grad); svg.appendChild(defs);

    svg.appendChild(el("line", { x1: cx, y1: 90, x2: cx, y2: 432, stroke: "url(#vfAxisGrad)", "stroke-width": 1.8, "stroke-linecap": "round" }));
    const arrow = el("g", { fill: "none", stroke: LINE, "stroke-width": 1.4, "stroke-linecap": "round", "stroke-miterlimit": 10 });
    arrow.appendChild(el("path", { d: `M${cx},64 L${cx},92` }));
    arrow.appendChild(el("path", { d: `M${cx},64 C${cx},69 ${cx - 4},73 ${cx - 9},73` }));
    arrow.appendChild(el("path", { d: `M${cx},64 C${cx},69 ${cx + 4},73 ${cx + 9},73` }));
    svg.appendChild(arrow);
    svg.appendChild(el("ellipse", { cx: cx, cy: apex.y, rx: 76, ry: 22, fill: "none", stroke: LINE, "stroke-width": 1.2, "stroke-dasharray": "1 6" }));

    const pulseLayer = el("g", {}); svg.appendChild(pulseLayer);

    const rings = {};
    ["capital", "customers", "clarity"].forEach((k) => {
      const g = el("g", {}); const o = L[k];
      const back = el("path", { class: "vf-ringpath", fill: "none", stroke: LINE, "stroke-width": 1.6, "stroke-dasharray": "4 5", d: `M ${cx - o.rx},${o.cy} A ${o.rx},${o.ry} 0 0 1 ${cx + o.rx},${o.cy}` });
      const front = el("path", { class: "vf-ringpath", fill: "none", stroke: INK, "stroke-width": 2, d: `M ${cx - o.rx},${o.cy} A ${o.rx},${o.ry} 0 0 0 ${cx + o.rx},${o.cy}` });
      g.appendChild(back); g.appendChild(front); svg.appendChild(g);
      rings[k] = { g, back, front };
      const t = el("text", { class: "vf-rlabel", x: cx + o.rx + 9, y: o.cy + 4, "font-size": "13", "font-weight": "500", fill: INK });
      t.textContent = k.charAt(0).toUpperCase() + k.slice(1);
      svg.appendChild(t); rings[k].label = t;
    });

    const ftl = el("text", { x: apex.x, y: apex.y + 26, "text-anchor": "middle", "font-size": "12", "font-weight": "500", fill: INK });
    ftl.textContent = "Founder / company"; svg.appendChild(ftl);

    const sqLayer = el("g", {}); svg.appendChild(sqLayer);
    const SQ = 19, ENTRY = -Math.PI / 2;
    const DUR = { capital: 5.2, customers: 6.8, clarity: 8.6 };
    const NODES = [];
    function addTokens(k, n) {
      for (let i = 0; i < n; i++) {
        const r = el("rect", { x: -SQ / 2, y: -SQ / 2, width: SQ, height: SQ, fill: COLORS[k], stroke: "#F9F9F0", "stroke-width": 2, opacity: 0 });
        sqLayer.appendChild(r);
        NODES.push({ layer: k, phase: i / n, dur: DUR[k], el: r });
      }
    }
    addTokens("capital", 4); addTokens("customers", 4); addTokens("clarity", 4);

    ["capital", "customers", "clarity"].forEach((k) => {
      const o = L[k];
      const h = el("ellipse", { cx: cx, cy: o.cy, rx: o.rx, ry: o.ry + 8, fill: "transparent", stroke: "transparent", "stroke-width": 18, class: "vf-hit" });
      h.addEventListener("mouseenter", () => select(k));
      h.addEventListener("click", () => select(k, true));
      svg.appendChild(h);
    });
    svg.addEventListener("mouseleave", () => { if (!locked) reset(); });

    let locked = false, selected = null, descTimer = null;
    function applyState() {
      ["capital", "customers", "clarity"].forEach((k) => {
        const isSel = selected === k, someSel = !!selected;
        if (isSel) {
          rings[k].front.setAttribute("stroke", INK); rings[k].front.setAttribute("stroke-width", 2.6);
          rings[k].back.setAttribute("stroke", BACKSEL); rings[k].back.setAttribute("stroke-width", 2); rings[k].back.setAttribute("stroke-dasharray", "none");
          rings[k].label.setAttribute("fill", INK);
        } else if (someSel) {
          rings[k].front.setAttribute("stroke", DIM); rings[k].front.setAttribute("stroke-width", 2);
          rings[k].back.setAttribute("stroke", DIM); rings[k].back.setAttribute("stroke-width", 1.6); rings[k].back.setAttribute("stroke-dasharray", "4 5");
          rings[k].label.setAttribute("fill", DIM);
        } else {
          rings[k].front.setAttribute("stroke", INK); rings[k].front.setAttribute("stroke-width", 2);
          rings[k].back.setAttribute("stroke", LINE); rings[k].back.setAttribute("stroke-width", 1.6); rings[k].back.setAttribute("stroke-dasharray", "4 5");
          rings[k].label.setAttribute("fill", INK);
        }
      });
      desc.style.opacity = 0;
      title.style.opacity = 0;
      clearTimeout(descTimer);
      descTimer = setTimeout(() => {
        if (selected) {
          title.textContent = selected.charAt(0).toUpperCase() + selected.slice(1);
          desc.textContent = DESC[selected]; desc.style.color = "rgba(15,14,11,0.72)";
        } else {
          title.textContent = "The three Cs";
          desc.textContent = "Hover a ring to read its principle."; desc.style.color = "rgba(15,14,11,0.5)";
        }
        desc.style.opacity = 1;
        title.style.opacity = 1;
      }, 170);
    }
    function select(k, lock) { if (lock) locked = true; selected = k; applyState(); }
    function reset() { locked = false; selected = null; applyState(); }

    const pulses = []; const Y0 = 430, Y1 = 84;
    const hbTimers = [];
    function emitPulse() {
      const c = el("circle", { cx: cx, cy: Y0, r: 3, fill: INK, opacity: 0 });
      pulseLayer.appendChild(c);
      pulses.push({ el: c, p: 0, dur: 1.05 + Math.random() * 0.35 });
    }
    function heartbeat() {
      emitPulse();
      hbTimers.push(setTimeout(emitPulse, 165));
      hbTimers.push(setTimeout(heartbeat, 950 + Math.random() * 950));
    }
    hbTimers.push(setTimeout(heartbeat, 500));

    const vis = { capital: 0, customers: 0, clarity: 0 };
    let last = performance.now(), T = 0, raf = 0;
    function frame(now) {
      const dt = (now - last) / 1000; last = now; T += dt;
      ["capital", "customers", "clarity"].forEach((k) => {
        const target = selected === k ? 1 : 0;
        vis[k] += (target - vis[k]) * Math.min(1, dt * 4.5);
      });
      NODES.forEach((n) => {
        const o = L[n.layer];
        const p = ((T / n.dur) + n.phase) % 1;
        const ang = ENTRY + p * Math.PI * 2;
        const x = cx + o.rx * Math.cos(ang), y = o.cy + o.ry * Math.sin(ang);
        const f = (Math.sin(ang) + 1) / 2;
        const s = (0.74 + 0.26 * f).toFixed(3);
        const fin = p < 0.16 ? p / 0.16 : 1;
        const fout = p > 0.84 ? (1 - p) / 0.16 : 1;
        const env = Math.min(fin, fout);
        n.el.setAttribute("transform", `translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(45) scale(${s})`);
        n.el.setAttribute("opacity", (env * vis[n.layer]).toFixed(3));
      });
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pz = pulses[i];
        pz.p += dt / pz.dur;
        const e = easeInOut(Math.min(1, pz.p));
        const y = Y0 - (Y0 - Y1) * e;
        pz.el.setAttribute("cy", y.toFixed(1));
        const fin = pz.p < 0.12 ? pz.p / 0.12 : 1;
        const fout = pz.p > 0.75 ? Math.max(0, (1 - pz.p) / 0.25) : 1;
        pz.el.setAttribute("opacity", Math.min(fin, fout).toFixed(2));
        if (pz.p >= 1) { pz.el.remove(); pulses.splice(i, 1); }
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    const playTimers = [];

    applyState();

    return function destroy() {
      cancelAnimationFrame(raf);
      clearTimeout(descTimer);
      hbTimers.forEach(clearTimeout);
      playTimers.forEach(clearTimeout);
      root.innerHTML = "";
    };
  }

  global.ViolaFunnel = { init: initViolaFunnel };

  if (typeof customElements !== "undefined" && !customElements.get("viola-funnel")) {
    customElements.define("viola-funnel", class extends HTMLElement {
      connectedCallback() {
        if (this._mounted) return;
        this._mounted = true;
        const mount = document.createElement("div");
        this.appendChild(mount);
        this._destroy = initViolaFunnel(mount);
      }
      disconnectedCallback() { if (this._destroy) this._destroy(); this._mounted = false; }
    });
  }
})(window);
