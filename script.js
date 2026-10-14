/* ===== SETTINGS: edit these ===== */
const SHOP_NAME = "Neostriata Phone";
const ORDER_WHATSAPP = "2349076943452";   // orders and repair reports are sent to this WhatsApp number (no + sign)
const ENGINEER_PHONE = "+2349076943452";
const DELIVERY = [                          // delivery options and fees in Naira
  { id: "city",  label: "Same city delivery", fee: 2000 },
  { id: "state", label: "Other town in my state", fee: 4000 },
  { id: "other", label: "Another state (courier)", fee: 6500 }
];

/* ===== PHONES: edit prices, reviews, and add image links ("img") ===== */
const PHONES = [
  { id:1, brand:"iPhone", name:"iPhone 17 Pro Max", img:"images/iphone-17-pro-max.jpg", price:2150000, rating:4.8, tag:"Latest", c:["#1f3a4d","#3d6a86"],
    does:"Flagship iPhone for pro-level photos, 4K video, gaming and all-day battery.",
    specs:{Display:"6.9-inch OLED, 120Hz", Camera:"48MP triple camera", Battery:"All-day, fast charging", Storage:"256GB", Chip:"Apple A19 Pro", OS:"iOS"},
    reviews:[{n:"Tunde A.",r:5,t:"Camera is unreal. Battery lasts me a full day of calls and social media."},{n:"Chioma E.",r:5,t:"Delivered fast and sealed. Very smooth phone."}] },
  { id:2, brand:"iPhone", name:"iPhone 16", img:"images/iphone-16.jpg", price:1250000, rating:4.6, tag:"", c:["#4b3f72","#8a7fc0"],
    does:"Smooth everyday iPhone with a great camera and long software support.",
    specs:{Display:"6.1-inch OLED", Camera:"48MP dual camera", Battery:"All-day", Storage:"128GB", Chip:"Apple A18", OS:"iOS"},
    reviews:[{n:"Bola K.",r:5,t:"Perfect size. Photos are clean even at night."},{n:"Ahmed S.",r:4,t:"Great phone, only wish the charger was included."}] },
  { id:3, brand:"Samsung", name:"Samsung Galaxy S25 Ultra", img:"images/galaxy-s25-ultra.jpg", price:1850000, rating:4.7, tag:"Top pick", c:["#14213d","#3a5a8c"],
    does:"Big screen, built-in S Pen, powerful zoom camera and strong Galaxy AI features.",
    specs:{Display:"6.9-inch AMOLED, 120Hz", Camera:"200MP quad camera", Battery:"5000mAh, 45W charging", Storage:"256GB", Chip:"Snapdragon 8 Elite", OS:"Android"},
    reviews:[{n:"Ifeanyi O.",r:5,t:"The zoom camera and S Pen are worth it. Fast delivery."},{n:"Hauwa M.",r:4,t:"Excellent screen. A bit heavy but I love it."}] },
  { id:4, brand:"Samsung", name:"Samsung Galaxy A56", img:"images/galaxy-a56.jpg", price:545000, rating:4.4, tag:"Best value", c:["#2a6f6b","#5fb3ac"],
    does:"Mid-range Samsung with a bright screen and a solid camera for daily use.",
    specs:{Display:"6.7-inch AMOLED, 120Hz", Camera:"50MP triple camera", Battery:"5000mAh, 45W charging", Storage:"128GB", Chip:"Exynos 1580", OS:"Android"},
    reviews:[{n:"Sade L.",r:4,t:"Good screen and battery for the price."},{n:"Emeka N.",r:5,t:"Very reliable. I use it for business every day."}] },
  { id:5, brand:"Redmi", name:"Redmi Note 14 Pro", img:"images/redmi-note-14-pro.jpg", price:340000, rating:4.5, tag:"Best value", c:["#8f2d2d","#d9665f"],
    does:"Sharp AMOLED screen, great camera and fast charging at a friendly price.",
    specs:{Display:"6.67-inch AMOLED, 120Hz", Camera:"200MP main camera", Battery:"5110mAh, 45W charging", Storage:"256GB", Chip:"Helio G100 Ultra", OS:"Android (HyperOS)"},
    reviews:[{n:"Kunle D.",r:5,t:"Cannot believe the camera at this price."},{n:"Blessing U.",r:4,t:"Battery is very good. Charges quickly."}] },
  { id:6, brand:"Redmi", name:"Redmi 14C", img:"images/redmi-14c.jpg", price:165000, rating:4.2, tag:"Budget", c:["#6b4e16","#c9a24a"],
    does:"Simple, affordable phone for calls, WhatsApp, YouTube and school work.",
    specs:{Display:"6.88-inch LCD, 120Hz", Camera:"50MP main camera", Battery:"5160mAh", Storage:"128GB", Chip:"Helio G81 Ultra", OS:"Android"},
    reviews:[{n:"Grace T.",r:4,t:"Strong battery and big screen for the money."},{n:"Musa Y.",r:4,t:"Good first smartphone for my sister."}] },
  { id:7, brand:"Tecno", name:"Tecno Camon 40 Pro", img:"images/tecno-camon-40-pro.jpg", price:295000, rating:4.4, tag:"Camera phone", c:["#0b5d8a","#4fb0d9"],
    does:"Made for selfies and content creators, with a curved screen and bright camera.",
    specs:{Display:"6.78-inch AMOLED, 120Hz", Camera:"50MP main, 50MP selfie", Battery:"5200mAh, 70W charging", Storage:"256GB", Chip:"Helio G100", OS:"Android (HiOS)"},
    reviews:[{n:"Zainab R.",r:5,t:"The selfie camera is my favourite part."},{n:"Obinna P.",r:4,t:"Fast charging saves me during power cuts."}] },
  { id:8, brand:"Tecno", name:"Tecno Spark 30", img:"images/tecno-spark-30.jpg", price:135000, rating:4.1, tag:"Budget", c:["#3b7a3b","#86c286"],
    does:"Budget phone with long battery life for everyday calls, apps and social media.",
    specs:{Display:"6.78-inch LCD, 90Hz", Camera:"64MP main camera", Battery:"5000mAh, 18W charging", Storage:"128GB", Chip:"Helio G91", OS:"Android (HiOS)"},
    reviews:[{n:"Femi J.",r:4,t:"Battery can last two days with light use."},{n:"Nneka C.",r:4,t:"Does everything I need, good price."}] },
  { id:9, brand:"Huawei", name:"Huawei Nova 13", img:"images/huawei-nova-13.jpg", price:420000, rating:4.3, tag:"", c:["#5a2a6e","#a566c4"],
    does:"Stylish phone with a bright screen and a camera tuned for portraits.",
    specs:{Display:"6.7-inch OLED, 120Hz", Camera:"50MP main, 60MP selfie", Battery:"5000mAh, 100W charging", Storage:"256GB", Chip:"Kirin", OS:"HarmonyOS"},
    reviews:[{n:"Dayo F.",r:4,t:"Very fast charging and nice design."},{n:"Rita I.",r:5,t:"Portrait photos look professional."}] },
  { id:10, brand:"Huawei", name:"Huawei Pura 70", img:"images/huawei-pura-70.jpg", price:980000, rating:4.5, tag:"Premium", c:["#222","#6b6b6b"],
    does:"Premium Huawei with a top-level camera system and a very sleek build.",
    specs:{Display:"6.6-inch OLED, 120Hz", Camera:"50MP variable-aperture camera", Battery:"4900mAh, 66W charging", Storage:"256GB", Chip:"Kirin 9010", OS:"HarmonyOS"},
    reviews:[{n:"Segun B.",r:5,t:"The camera beats phones that cost more."},{n:"Amina G.",r:4,t:"Beautiful phone. Apps are different from Android, so ask first."}] }
];

/* Repair issues and time estimates */
const REPAIRS = [
  { id:"screen",  label:"Cracked or broken screen",     eta:"1 to 2 days" },
  { id:"battery", label:"Battery drains or will not charge", eta:"Same day to 1 day" },
  { id:"port",    label:"Charging port problem",        eta:"1 day" },
  { id:"water",   label:"Water damage",                 eta:"3 to 7 days" },
  { id:"software",label:"Software, hanging or stuck on logo", eta:"1 day" },
  { id:"camera",  label:"Camera, speaker or mic fault", eta:"1 to 3 days" },
  { id:"board",   label:"Phone will not switch on (motherboard)", eta:"1 to 2 weeks" },
  { id:"other",   label:"Other problem",                eta:"Engineer will confirm" }
];

/* ===== Helpers ===== */
const $ = s => document.querySelector(s);
const naira = n => "\u20A6" + Number(n).toLocaleString("en-NG");
const stars = r => "\u2605".repeat(Math.round(r)) + "\u2606".repeat(5 - Math.round(r));
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toast.t); toast.t=setTimeout(()=>t.classList.remove("show"),2200); }

/* Cart (saved in the browser so it survives a refresh) */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("neo_cart") || "[]"); } catch(e){ cart = []; }
function saveCart(){ try { localStorage.setItem("neo_cart", JSON.stringify(cart)); } catch(e){} }

/* ===== Shop ===== */
let activeBrand = "All";
const brands = ["All", ...new Set(PHONES.map(p => p.brand))];

function renderChips(){
  $("#chips").innerHTML = brands.map(b => `<button class="chip" aria-pressed="${b===activeBrand}" data-b="${b}">${b}</button>`).join("");
  document.querySelectorAll(".chip").forEach(c => c.onclick = () => { activeBrand = c.dataset.b; renderChips(); renderGrid(); });
}

function thumb(p){
  const bg = `background:linear-gradient(135deg,${p.c[0]},${p.c[1]})`;
  const inner = p.img ? `<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy" onerror="this.outerHTML='<div class=&quot;phone-shape&quot;></div>'">` : `<div class="phone-shape"></div>`;
  return `<div class="thumb" style="${bg}"><span class="brand-label">${p.brand}</span>${p.tag?`<span class="badge">${p.tag}</span>`:""}${inner}</div>`;
}

function renderGrid(){
  const q = $("#search").value.trim().toLowerCase();
  const list = PHONES.filter(p => (activeBrand==="All" || p.brand===activeBrand) && (p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)));
  $("#grid").innerHTML = list.length ? list.map(p => `
    <article class="card">
      ${thumb(p)}
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="rating"><span class="stars">${stars(p.rating)}</span> ${p.rating} (${p.reviews.length} reviews)</div>
        <p class="does">${p.does}</p>
        <div class="price">${naira(p.price)}</div>
        <div class="card-actions">
          <button class="btn btn-ghost" data-view="${p.id}">Details</button>
          <button class="btn btn-teal" data-add="${p.id}">Add to cart</button>
        </div>
      </div>
    </article>`).join("") : `<div class="empty">No phone matches your search. Try another name or choose All.</div>`;
  document.querySelectorAll("[data-view]").forEach(b => b.onclick = () => openProduct(+b.dataset.view));
  document.querySelectorAll("[data-add]").forEach(b => b.onclick = () => addToCart(+b.dataset.add));
}
$("#search").addEventListener("input", renderGrid);

/* Customer reviews: reviews typed on the site are saved on that visitor's device */
function getLocalReviews(id){
  try { return (JSON.parse(localStorage.getItem("neo_reviews") || "{}"))[id] || []; } catch(e){ return []; }
}
function saveLocalReview(id, rev){
  try {
    const all = JSON.parse(localStorage.getItem("neo_reviews") || "{}");
    (all[id] = all[id] || []).unshift(rev);
    localStorage.setItem("neo_reviews", JSON.stringify(all));
  } catch(e){}
}
const reviewHTML = r => `<div class="review" style="margin-bottom:8px"><span class="stars">${stars(r.r)}</span><p>${esc(r.t)}</p><small>${esc(r.n)}${r.mine ? ", you (shown on this device)" : ", verified buyer"}</small></div>`;

function openProduct(id){
  const p = PHONES.find(x => x.id===id);
  $("#pModal").innerHTML = `
    <button class="close" id="closeP" aria-label="Close">&times;</button>
    ${p.img ? `<img class="modal-img" src="${esc(p.img)}" alt="${esc(p.name)}" onerror="this.remove()">` : ""}
    <h2 id="pTitle" style="font-size:1.5rem">${p.name}</h2>
    <div class="rating" style="margin:4px 0 8px"><span class="stars">${stars(p.rating)}</span> ${p.rating} rating</div>
    <div class="price">${naira(p.price)}</div>
    <p style="margin-top:10px">${p.does}</p>
    <div class="specs">${Object.entries(p.specs).map(([k,v]) => `<div><b>${k}</b>${v}</div>`).join("")}</div>
    <h3 style="font-family:var(--head);margin:8px 0">Customer reviews</h3>
    <div id="revList">${[...getLocalReviews(id).map(r => ({...r, mine:true})), ...p.reviews].map(reviewHTML).join("")}</div>
    <form id="revForm" class="rev-form" novalidate>
      <h3 style="font-family:var(--head);margin-bottom:8px">Bought this phone? Write a review</h3>
      <label for="vName">Your name</label><input id="vName" autocomplete="name">
      <div class="err" data-for="vName"></div>
      <label for="vRate" style="margin-top:8px">Your rating</label>
      <select id="vRate"><option value="5">5 stars, excellent</option><option value="4">4 stars, good</option><option value="3">3 stars, okay</option><option value="2">2 stars, poor</option><option value="1">1 star, bad</option></select>
      <label for="vText" style="margin-top:8px">Your review</label>
      <textarea id="vText" placeholder="Tell other customers about the phone, delivery and service"></textarea>
      <div class="err" data-for="vText"></div>
      <button class="btn btn-ghost" type="submit" style="width:100%;margin-top:8px">Submit review</button>
    </form>
    <button class="btn btn-teal" style="width:100%;margin-top:10px" id="modalAdd">Add to cart</button>`;
  $("#pOverlay").classList.add("open");
  $("#closeP").onclick = closeProduct;
  $("#modalAdd").onclick = () => { addToCart(id); closeProduct(); };
  $("#closeP").focus();
  $("#revForm").onsubmit = ev => {
    ev.preventDefault();
    const n = $("#vName").value.trim(), t = $("#vText").value.trim(), r = +$("#vRate").value;
    setErr("vName", n ? "" : "Enter your name.");
    setErr("vText", t.length >= 10 ? "" : "Write at least a short sentence (10 letters or more).");
    if(!n || t.length < 10) return;
    saveLocalReview(id, {n, r, t});
    $("#revList").insertAdjacentHTML("afterbegin", reviewHTML({n, r, t, mine:true}));
    const msg = `NEW REVIEW for ${p.name} (${SHOP_NAME})\n\nName: ${n}\nRating: ${r}/5\nReview: ${t}`;
    $("#revForm").innerHTML = `<div class="result show"><h3>Thank you, ${esc(n)}!</h3><p>Your review is saved on this device. Tap below to send it to ${SHOP_NAME} so it can be shown to all customers.</p><a class="btn btn-teal" style="margin-top:10px" target="_blank" rel="noopener" href="https://wa.me/${ORDER_WHATSAPP}?text=${encodeURIComponent(msg)}">Send review to shop</a></div>`;
  };
}
function closeProduct(){ $("#pOverlay").classList.remove("open"); }
$("#pOverlay").addEventListener("click", e => { if(e.target.id==="pOverlay") closeProduct(); });

function renderTopReviews(){
  const picks = PHONES.slice(0,6).map(p => ({p, r:p.reviews[0]}));
  $("#topReviews").innerHTML = picks.map(({p,r}) => `<div class="review"><span class="stars">${stars(r.r)}</span><p>${esc(r.t)}</p><small>${esc(r.n)} on ${p.name}</small></div>`).join("");
}

/* ===== Cart + checkout ===== */
function addToCart(id){
  const it = cart.find(c => c.id===id);
  if(it) it.qty++; else cart.push({id, qty:1});
  saveCart(); updateCart(); toast("Added to cart");
}
function updateCart(){
  $("#cartCount").textContent = cart.reduce((s,c) => s+c.qty, 0);
  renderCart();
}
function subtotal(){ return cart.reduce((s,c) => s + PHONES.find(p => p.id===c.id).price * c.qty, 0); }

function renderCart(){
  const box = $("#cartItems"), area = $("#checkoutArea");
  if(!cart.length){
    box.innerHTML = `<div class="empty">Your cart is empty. Pick a phone from the shop to start your order.</div>`;
    area.innerHTML = ""; return;
  }
  box.innerHTML = cart.map(c => {
    const p = PHONES.find(x => x.id===c.id);
    return `<div class="cart-item"><div><strong>${p.name}</strong><div class="note">${naira(p.price)} each</div>
      <div class="qty"><button data-dec="${p.id}" aria-label="Reduce quantity">&minus;</button><span>${c.qty}</span><button data-inc="${p.id}" aria-label="Increase quantity">+</button></div></div>
      <div style="text-align:right"><strong>${naira(p.price*c.qty)}</strong><br><button class="btn btn-ghost" style="padding:4px 10px;margin-top:6px;font-size:.8rem" data-rm="${p.id}">Remove</button></div></div>`;
  }).join("");
  box.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => { cart.find(c=>c.id===+b.dataset.inc).qty++; saveCart(); updateCart(); });
  box.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => { const c=cart.find(c=>c.id===+b.dataset.dec); c.qty--; if(c.qty<1) cart=cart.filter(x=>x!==c); saveCart(); updateCart(); });
  box.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => { cart=cart.filter(c=>c.id!==+b.dataset.rm); saveCart(); updateCart(); });

  area.innerHTML = `
    <form id="orderForm" novalidate>
      <h3 style="font-family:var(--head);margin:6px 0 10px">Delivery details</h3>
      <div class="row"><div><label for="oName">Full name</label><input id="oName" autocomplete="name"><div class="err" data-for="oName"></div></div></div>
      <div class="row"><div><label for="oPhone">Phone number</label><input id="oPhone" type="tel" inputmode="tel" autocomplete="tel"><div class="err" data-for="oPhone"></div></div></div>
      <div class="row"><div><label for="oAddr">Delivery address</label><textarea id="oAddr" placeholder="House number, street, area, city, state"></textarea><div class="err" data-for="oAddr"></div></div></div>
      <div class="row"><div><label for="oDel">Delivery option</label>
        <select id="oDel">${DELIVERY.map(d => `<option value="${d.id}">${d.label} (${naira(d.fee)})</option>`).join("")}</select></div></div>
      <div class="row"><div><label for="oPay">Payment</label>
        <select id="oPay"><option>Pay on delivery</option><option>Bank transfer before delivery</option></select></div></div>
      <div class="totals">
        <div><span>Phones</span><span>${naira(subtotal())}</span></div>
        <div><span>Delivery</span><span id="feeShow"></span></div>
        <div class="grand"><span>Total</span><span id="totalShow"></span></div>
      </div>
      <button class="btn btn-teal" type="submit" style="width:100%;margin-top:12px">Place order</button>
      <p class="note" style="margin-top:8px">Your order opens in WhatsApp so ${SHOP_NAME} can confirm it with you and arrange delivery.</p>
    </form>`;
  const calc = () => { const f = DELIVERY.find(d => d.id===$("#oDel").value).fee; $("#feeShow").textContent = naira(f); $("#totalShow").textContent = naira(subtotal()+f); };
  $("#oDel").onchange = calc; calc();
  $("#orderForm").onsubmit = submitOrder;
}

function setErr(id, msg){ const e = document.querySelector(`.err[data-for="${id}"]`); if(e) e.textContent = msg || ""; }
const validPhone = v => v.replace(/[\s\-()+]/g,"").length >= 10 && /^[0-9+\s\-()]+$/.test(v);

function submitOrder(e){
  e.preventDefault();
  const name=$("#oName").value.trim(), phone=$("#oPhone").value.trim(), addr=$("#oAddr").value.trim();
  setErr("oName", name ? "" : "Enter your name."); setErr("oPhone", validPhone(phone) ? "" : "Enter a valid phone number.");
  setErr("oAddr", addr.length>=8 ? "" : "Enter your full delivery address.");
  if(!name || !validPhone(phone) || addr.length<8) return;
  const del = DELIVERY.find(d => d.id===$("#oDel").value);
  const orderId = "NP" + Date.now().toString().slice(-6);
  const lines = cart.map(c => { const p=PHONES.find(x=>x.id===c.id); return `- ${p.name} x${c.qty}: ${naira(p.price*c.qty)}`; }).join("\n");
  const total = subtotal() + del.fee;
  const msg = `NEW ORDER ${orderId} (${SHOP_NAME})\n\n${lines}\n\nDelivery: ${del.label} (${naira(del.fee)})\nTotal: ${naira(total)}\nPayment: ${$("#oPay").value}\n\nName: ${name}\nPhone: ${phone}\nAddress: ${addr}`;
  window.open(`https://wa.me/${ORDER_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  $("#cartItems").innerHTML = "";
  $("#checkoutArea").innerHTML = `<div class="result show"><h3>Order ${orderId} ready to send</h3><p>WhatsApp should open with your order. Press Send to confirm it. If it did not open, tap the button below.</p>
    <a class="btn btn-teal" style="margin-top:10px" target="_blank" rel="noopener" href="https://wa.me/${ORDER_WHATSAPP}?text=${encodeURIComponent(msg)}">Open WhatsApp</a></div>`;
  cart = []; saveCart(); $("#cartCount").textContent = 0;
}

function openCart(){ $("#cOverlay").classList.add("open"); renderCart(); $("#closeCart").focus(); }
function closeCart(){ $("#cOverlay").classList.remove("open"); }
$("#openCart").onclick = openCart; $("#closeCart").onclick = closeCart;
$("#cOverlay").addEventListener("click", e => { if(e.target.id==="cOverlay") closeCart(); });
document.addEventListener("keydown", e => { if(e.key==="Escape"){ closeCart(); closeProduct(); } });

/* ===== Repair ===== */
function renderRepairUI(){
  $("#rIssue").innerHTML = `<option value="">Choose the problem</option>` + REPAIRS.map(r => `<option value="${r.id}">${r.label}</option>`).join("");
  $("#etaTable").innerHTML = REPAIRS.map(r => `<tr data-r="${r.id}"><td>${r.label}</td><td>${r.eta}</td></tr>`).join("");
  $("#rIssue").onchange = () => {
    document.querySelectorAll("#etaTable tr").forEach(tr => tr.classList.toggle("hl", tr.dataset.r===$("#rIssue").value));
  };
}

$("#repairForm").addEventListener("submit", e => {
  e.preventDefault();
  const v = id => $("#"+id).value.trim();
  const name=v("rName"), phone=v("rPhone"), brand=v("rBrand"), model=v("rModel"), issue=v("rIssue");
  setErr("rName", name ? "" : "Enter your name.");
  setErr("rPhone", validPhone(phone) ? "" : "Enter a valid phone number.");
  setErr("rBrand", brand ? "" : "Choose your phone brand.");
  setErr("rModel", model ? "" : "Enter your phone model.");
  setErr("rIssue", issue ? "" : "Choose the problem.");
  if(!name || !validPhone(phone) || !brand || !model || !issue) return;

  const r = REPAIRS.find(x => x.id===issue);
  const ticket = "RP" + Date.now().toString().slice(-6);
  const msg = `REPAIR REPORT ${ticket} (${SHOP_NAME})\n\nName: ${name}\nPhone: ${phone}\nDevice: ${brand} ${model}\nProblem: ${r.label}\nDetails: ${v("rDesc") || "None"}\nHandover: ${$("#rMode").value}\nEstimated time: ${r.eta}`;
  const link = `https://wa.me/${ORDER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  const box = $("#repairResult");
  box.innerHTML = `<h3>Report ${ticket} received</h3>
    <p><strong>${esc(brand)} ${esc(model)}</strong>: ${r.label}.</p>
    <p>Estimated repair time: <strong>${r.eta}</strong>.</p>
    <p style="margin-top:8px">Send this report to the engineer on WhatsApp, or call <a href="tel:${ENGINEER_PHONE}"><strong>+234 907 694 3452</strong></a>.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
      <a class="btn btn-teal" target="_blank" rel="noopener" href="${link}">Send report on WhatsApp</a>
      <a class="btn btn-ghost" href="tel:${ENGINEER_PHONE}">Call engineer</a>
    </div>`;
  box.classList.add("show");
  box.scrollIntoView({behavior:"smooth", block:"nearest"});
  e.target.reset();
  document.querySelectorAll("#etaTable tr").forEach(tr => tr.classList.remove("hl"));
});

/* ===== Start ===== */
$("#yr").textContent = new Date().getFullYear();
renderChips(); renderGrid(); renderTopReviews(); renderRepairUI(); updateCart();
