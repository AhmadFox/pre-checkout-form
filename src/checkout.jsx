import { useState, useRef } from "react";

const SAR = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="12" height="13.2"
    style={{ display: "inline-block", verticalAlign: "-0.125em", marginRight: "2px" }}>
    <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"/>
    <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"/>
  </svg>
);

const ReceiptPercentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="15" height="15" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "4px", flexShrink: 0 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.723 3.066 3.745 3.745 0 01-3.066.723 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.066-.723 3.745 3.745 0 01-.723-3.066A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.723-3.066 3.745 3.745 0 013.066-.723A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.066.723 3.745 3.745 0 01.723 3.066A3.745 3.745 0 0121 12z" />
  </svg>
);

const TagIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "3px" }}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const SHIPPING_COD = 35;
const SHIPPING_PREPAID = 25;
const FREE_SHIPPING_THRESHOLD = 900;

const INIT_PRODUCTS = [
  {
    id: 1,
    name: "أعواد العود الفاخر - 14 جم",
    nameEn: "Premium Oud Sticks 14g",
    price: 35,
    oldPrice: null,
    qty: 1,
    imgUrl: "/images/oud-sticks.png",
  },
  {
    id: 2,
    name: "مسك اسود - 3 مل",
    nameEn: "Black Musk 3ml",
    price: 43.80,
    oldPrice: null,
    qty: 1,
    imgUrl: "/images/black-musk.png",
  },
  {
    id: 3,
    name: "اميرالد عود - 80 مل",
    nameEn: "Emeraude Oud 80ml",
    price: 154,
    oldPrice: 207,
    qty: 2,
    offer: "خصم يوم التأسيس 🎉",
    imgUrl: "/images/emeraude-oud.png",
  },
];

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const TabbyLogo = () => (
  <img src="/images/tabby-logo.png" alt="tabby"
    style={{ width: "91", height: "28px", objectFit: "cover", objectPosition: "center", display: "block", borderRadius: "8px" }} />
);

const TamaraLogo = () => (
  <img src="/images/tamara-logo.png" alt="tamara"
    style={{ width: "91", height: "28px", objectFit: "cover", objectPosition: "center", display: "block", borderRadius: "8px" }} />
);

function QtyStepperButton({ value, onInc, onDec }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", background: "#f5f0eb", borderRadius: "8px", overflow: "hidden", height: "28px" }}>
      <button onClick={onDec} disabled={value <= 1}
        style={{ width: "28px", height: "28px", border: "none", background: "none", cursor: value <= 1 ? "not-allowed" : "pointer", fontSize: "15px", fontWeight: 700, color: value <= 1 ? "#ccc" : "#101631", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
      <span style={{ width: "24px", textAlign: "center", fontSize: "13px", fontWeight: 700, color: "#101631", fontFamily: "monospace" }}>{value}</span>
      <button onClick={onInc} disabled={value >= 10}
        style={{ width: "28px", height: "28px", border: "none", background: "none", cursor: value >= 10 ? "not-allowed" : "pointer", fontSize: "15px", fontWeight: 700, color: value >= 10 ? "#ccc" : "#101631", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
    </div>
  );
}

function OTPModal({ phone, onSuccess, onClose }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");
  const inputs = useRef([]);

  const verify = (val) => {
    if (val === "123456") {
      setStatus("success"); setMsg("تم التحقق بنجاح!");
      setTimeout(() => onSuccess(), 1800);
    } else {
      setStatus("error"); setMsg("الرمز غير صحيح، حاول مجدداً");
      setTimeout(() => { setCode(["","","","","",""]); setStatus("idle"); setMsg(""); inputs.current[0]?.focus(); }, 2000);
    }
  };

  const handleChange = (i, v) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...code]; next[i] = v; setCode(next);
    if (v && i < 5) inputs.current[i + 1]?.focus();
    if (next.every(d => d !== "")) verify(next.join(""));
  };

  const handleKey = (i, e) => {
    if (e.key === "Backspace" && !code[i] && i > 0) inputs.current[i - 1]?.focus();
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(16,22,49,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backdropFilter: "blur(4px)" }}>
      <div style={{ background: "#fff", borderRadius: "20px", padding: "2rem 1.5rem", width: "100%", maxWidth: "340px", textAlign: "center", position: "relative", boxShadow: "0 24px 60px rgba(16,22,49,0.2)" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "1rem", left: "1rem", background: "none", border: "none", cursor: "pointer", color: "#888" }}><XIcon /></button>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#f2e3d0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontSize: "24px" }}>📱</div>
        <h3 style={{ margin: "0 0 0.4rem", fontSize: "18px", fontWeight: 700, color: "#101631", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>التحقق من رقم الجوال</h3>
        <p style={{ margin: "0 0 1.5rem", fontSize: "13px", color: "#666", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>أدخل الرمز المرسل إلى<br/><strong dir="ltr">+966 {phone}</strong></p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "1.25rem", direction: "ltr" }}>
          {code.map((d, i) => (
            <input key={i} ref={el => inputs.current[i] = el} value={d}
              onChange={e => handleChange(i, e.target.value)} onKeyDown={e => handleKey(i, e)}
              maxLength={1} inputMode="numeric"
              style={{ width: "42px", height: "50px", textAlign: "center", fontSize: "22px", fontWeight: 700, border: `2px solid ${status === "error" ? "#ef4444" : status === "success" ? "#22c55e" : d ? "#101631" : "#e5e7eb"}`, borderRadius: "10px", outline: "none", color: "#101631", fontFamily: "monospace", background: status === "success" ? "#f0fdf4" : status === "error" ? "#fef2f2" : "#fafafa" }} />
          ))}
        </div>
        {status === "success" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <p style={{ color: "#22c55e", fontWeight: 600, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", margin: 0 }}>{msg}</p>
          </div>
        )}
        {status === "error" && <p style={{ color: "#ef4444", fontWeight: 600, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", margin: 0 }}>{msg}</p>}
        {status === "idle" && <p style={{ color: "#999", fontSize: "12px", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", margin: 0 }}>رمز المثال: 123456</p>}
      </div>
    </div>
  );
}

const GCC_COUNTRIES = [
  { code: "SA", name: "المملكة العربية السعودية", flag: "🇸🇦", cities: ["الرياض","جدة","مكة المكرمة","المدينة المنورة","الدمام","الخبر","الأحساء","الطائف","تبوك","أبها","القصيم","حائل","جازان","نجران","الجوف"] },
  { code: "AE", name: "الإمارات العربية المتحدة", flag: "🇦🇪", cities: ["دبي","أبوظبي","الشارقة","عجمان","رأس الخيمة","الفجيرة","أم القيوين","العين","خورفكان"] },
  { code: "KW", name: "الكويت", flag: "🇰🇼", cities: ["مدينة الكويت","حولي","الفروانية","الأحمدي","مبارك الكبير","الجهراء"] },
  { code: "QA", name: "قطر", flag: "🇶🇦", cities: ["الدوحة","الريان","الوكرة","أم صلال","الخور","الشمال","الضعاين","مشيرب"] },
  { code: "BH", name: "البحرين", flag: "🇧🇭", cities: ["المنامة","المحرق","الرفاع","مدينة عيسى","مدينة حمد","سترة","الزلاق"] },
  { code: "OM", name: "سلطنة عُمان", flag: "🇴🇲", cities: ["مسقط","صلالة","صحار","نزوى","صور","البريمي","مطرح","عبري"] },
];

const SA_NATIONAL_ADDRESSES = [
  { label: "النخيل، الرياض", code: "RRSD2201" },
  { label: "العليا، الرياض",  code: "RRSD2202" },
  { label: "الورود، الرياض", code: "RRSD2203" },
  { label: "المروج، الرياض", code: "RRSD2204" },
];

const SelectField = ({ label, value, onChange, children }) => (
  <div>
    <label style={{ display: "block", fontSize: "12px", color: "#666", marginBottom: "6px", fontWeight: 600, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>{label}</label>
    <div style={{ position: "relative" }}>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #ebf0f2", borderRadius: "10px", fontSize: "14px", color: "#101631", background: "#fafafa", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", appearance: "none", cursor: "pointer", outline: "none", direction: "rtl" }}>
        {children}
      </select>
      <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#888" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </div>
  </div>
);

function MapModal({ onConfirm, onClose }) {
  const [country, setCountry] = useState("SA");
  const [pinPos, setPinPos] = useState({ x: 50, y: 45 });
  const [pinTapped, setPinTapped] = useState(false);
  const [nationalAddr, setNationalAddr] = useState("");
  const [city, setCity] = useState("");
  const [addressLine, setAddressLine] = useState("");

  const selectedCountry = GCC_COUNTRIES.find(c => c.code === country);
  const isSA = country === "SA";

  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100);
    const y = ((e.clientY - rect.top) / rect.height * 100);
    setPinPos({ x, y });
    setPinTapped(true);
    if (isSA) {
      const idx = Math.floor((x / 100) * SA_NATIONAL_ADDRESSES.length);
      setNationalAddr(SA_NATIONAL_ADDRESSES[Math.min(idx, SA_NATIONAL_ADDRESSES.length - 1)].code);
    }
  };

  const handleCountryChange = (c) => {
    setCountry(c);
    setCity("");
    setAddressLine("");
    setNationalAddr("");
    setPinTapped(false);
    setPinPos({ x: 50, y: 45 });
  };

  const canConfirm = isSA ? (nationalAddr !== "") : (city !== "" && addressLine.trim().length > 0);

  const handleConfirm = () => {
    if (!canConfirm) return;
    const label = isSA
      ? `${selectedCountry.name} — ${SA_NATIONAL_ADDRESSES.find(a => a.code === nationalAddr)?.label} (${nationalAddr})`
      : `${selectedCountry.name} — ${city}، ${addressLine.trim()}`;
    onConfirm(label);
  };

  const inputStyle = { width: "100%", padding: "11px 14px", border: "1.5px solid #ebf0f2", borderRadius: "10px", fontSize: "14px", color: "#101631", background: "#fafafa", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", outline: "none", transition: "border-color 0.2s" };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(16,22,49,0.6)", zIndex: 1000, display: "flex", alignItems: "flex-end", justifyContent: "center", backdropFilter: "blur(4px)", animation: "fadeIn 0.25s ease" }}>
      <div style={{ background: "#fff", borderRadius: "20px 20px 0 0", width: "100%", maxWidth: "480px", maxHeight: "92vh", overflow: "auto", display: "flex", flexDirection: "column", animation: "slideUp 0.35s cubic-bezier(0.32,0.72,0,1)" }}>

        {/* Header */}
        <div style={{ padding: "1.25rem 1.25rem 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#888" }}><XIcon /></button>
          <h3 style={{ margin: 0, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", fontSize: "17px", fontWeight: 700, color: "#101631" }}>عنوان التوصيل</h3>
          <div style={{ width: 24 }} />
        </div>

        {/* Map */}
        <div style={{ margin: "1rem", borderRadius: "14px", height: "170px", background: "linear-gradient(135deg,#e8f4e8,#c8dfc8)", position: "relative", overflow: "hidden", border: "1px solid #cde5cd", flexShrink: 0, cursor: "crosshair" }}
          onClick={handleMapClick}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 200" preserveAspectRatio="none">
            <line x1="0" y1="100" x2="400" y2="100" stroke="#fff" strokeWidth="2" opacity="0.4"/>
            <line x1="200" y1="0" x2="200" y2="200" stroke="#fff" strokeWidth="2" opacity="0.4"/>
            {[[20,20,60,22],[130,18,50,22],[260,15,70,24],[15,70,65,24],[130,75,55,22],[220,68,65,22],[15,130,55,24],[120,132,75,24],[260,118,60,26]].map(([x,y,w,h],i) => (
              <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="#fff" opacity="0.25"/>
            ))}
          </svg>
          <div style={{ position: "absolute", left: `${pinPos.x}%`, top: `${pinPos.y}%`, transform: "translate(-50%,-100%)", transition: "left 0.2s, top 0.2s", pointerEvents: "none" }}>
            <div style={{ background: "#101631", borderRadius: "50% 50% 50% 0", width: "28px", height: "28px", transform: "rotate(-45deg)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 10px rgba(0,0,0,0.3)" }}>
              <div style={{ transform: "rotate(45deg)", width: "8px", height: "8px", background: "#f2e3d0", borderRadius: "50%" }}/>
            </div>
          </div>
          {!pinTapped && (
            <p style={{ position: "absolute", bottom: 8, right: 0, left: 0, textAlign: "center", fontSize: "11px", color: "#555", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", margin: 0 }}>اضغط على الخريطة لتحديد الموقع</p>
          )}
        </div>

        <div style={{ padding: "0 1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* Country */}
          <SelectField label="الدولة" value={country} onChange={handleCountryChange}>
            {GCC_COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
          </SelectField>

          {/* SA: single national address field (auto-filled by map pin) */}
          {isSA && (
            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#666", marginBottom: "6px", fontWeight: 600, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>العنوان الوطني السعودي</label>
              <div style={{ padding: "11px 14px", border: `1.5px solid ${nationalAddr ? "#101631" : "#ebf0f2"}`, borderRadius: "10px", background: nationalAddr ? "#f9f7f4" : "#fafafa", minHeight: "44px", display: "flex", alignItems: "center", gap: "8px" }}>
                {nationalAddr ? (
                  <>
                    <span style={{ flex: 1, fontSize: "14px", color: "#101631", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", fontWeight: 600 }}>
                      {SA_NATIONAL_ADDRESSES.find(a => a.code === nationalAddr)?.label}
                    </span>
                    <span style={{ fontSize: "11px", color: "#999", fontFamily: "monospace", letterSpacing: "1px", flexShrink: 0 }}>{nationalAddr}</span>
                  </>
                ) : (
                  <span style={{ fontSize: "13px", color: "#aab0bc", fontFamily: "'NotoNaskhArabic', 'GretaArabicAR', sans-serif" }}>اضغط على الخريطة لتحديد موقعك</span>
                )}
              </div>
            </div>
          )}

          {/* Non-SA: city + address */}
          {!isSA && (
            <>
              <SelectField label="المدينة" value={city} onChange={setCity}>
                <option value="">اختر المدينة</option>
                {selectedCountry.cities.map(c => <option key={c} value={c}>{c}</option>)}
              </SelectField>
              <div>
                <label style={{ display: "block", fontSize: "12px", color: "#666", marginBottom: "6px", fontWeight: 600, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>العنوان التفصيلي</label>
                <input value={addressLine} onChange={e => setAddressLine(e.target.value)}
                  placeholder="الحي، اسم الشارع، رقم المبنى..."
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#101631"}
                  onBlur={e => e.target.style.borderColor = "#ebf0f2"} />
              </div>
            </>
          )}

          {/* Confirm */}
          <button onClick={handleConfirm}
            style={{ width: "100%", padding: "14px", borderRadius: "12px", background: canConfirm ? "#101631" : "#ccc", color: "#fff", border: "none", cursor: canConfirm ? "pointer" : "not-allowed", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", fontSize: "16px", fontWeight: 700, transition: "background 0.2s" }}>
            {canConfirm ? "تأكيد العنوان" : isSA ? "اختر العنوان الوطني أولاً" : "أكمل بيانات العنوان"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Checkout() {
  const [items, setItems] = useState(INIT_PRODUCTS);
  const [orderOpen, setOrderOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponStatus, setCouponStatus] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [location, setLocation] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [payMethod, setPayMethod] = useState(null);
  const [showOTP, setShowOTP] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const updateQty = (id, delta) =>
    setItems(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, Math.min(10, p.qty + delta)) } : p));

  const subtotal = items.reduce((s, p) => s + p.price * p.qty, 0);
  const originalTotal = items.reduce((s, p) => s + (p.oldPrice || p.price) * p.qty, 0);
  const totalSaving = originalTotal - subtotal;

  const isCOD = payMethod === "cod";
  const isTabbyTamara = payMethod === "tabby" || payMethod === "tamara";
  const eligibleFreeShip = subtotal >= FREE_SHIPPING_THRESHOLD;
  const isFreeShip = eligibleFreeShip && !isCOD;
  const shipping = !payMethod ? 0 : isCOD ? SHIPPING_COD : isFreeShip ? 0 : SHIPPING_PREPAID;
  const total = subtotal + shipping;
  const installment = isTabbyTamara ? Math.ceil(total / 4) : null;

  const progressPct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  const handlePhoneChange = (v) => {
    const digits = v.replace(/\D/g, "").slice(0, 9);
    setPhone(digits); setPhoneVerified(false);
    if (digits.length === 9) setTimeout(() => setShowOTP(true), 300);
  };

  const shippingBadge = (id) => {
    if (id === "cod") return { text: `شحن: ${Number(SHIPPING_COD).toFixed(2)}`, green: false, showSAR: true };
    if (eligibleFreeShip) return { text: "شحن مجاني 🚚", green: true, showSAR: false };
    return { text: `شحن: ${Number(SHIPPING_PREPAID).toFixed(2)}`, green: false, showSAR: true };
  };

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === "DKHOUN10") {
      setCouponStatus({ valid: true, msg: "تم تطبيق كود الخصم! خصم 10%" });
    } else if (code === "") {
      setCouponStatus(null);
    } else {
      setCouponStatus({ valid: false, msg: "الكود غير صحيح أو منتهي الصلاحية" });
    }
  };

  const couponDiscount = couponStatus?.valid ? Math.round(subtotal * 0.1) : 0;
  const totalAfterCoupon = total - couponDiscount;

  const fmt = (n) => Number(n).toFixed(2);

  const deliveryComplete = name.trim().length > 0 && location.trim().length > 0 && phoneVerified;
  const missingName     = name.trim().length === 0;
  const missingLocation = location.trim().length === 0;
  const missingPhone    = !phoneVerified;

  const btnLabel = () => {
    if (missingName)     return "أدخل اسمك الكامل";
    if (missingLocation) return "اختر موقع التوصيل";
    if (missingPhone)    return "تحقق من رقم الجوال";
    if (!payMethod)      return "اختر طريقة الدفع";
    if (isTabbyTamara)   return <span>تأكيد الطلب • {fmt(installment)} <SAR /></span>;
    return <span>تأكيد الطلب • {fmt(totalAfterCoupon)} <SAR /></span>;
  };

  const btnReady = deliveryComplete && !!payMethod;

  const fallback60 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' rx='10' fill='%23f2e3d0'/%3E%3C/svg%3E";
  const fallback34 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34'%3E%3Crect width='34' height='34' rx='6' fill='%23f2e3d0'/%3E%3C/svg%3E";

  return (
    <div dir="rtl" style={{ minHeight: "100vh", background: "#f5f0eb", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", paddingBottom: "140px" }}>
      <style>{`
        @font-face {
          font-family: 'GretaArabicAR';
          src: url('/fonts/GretaArabicAR-Bold.woff2') format('woff2'),
               url('/fonts/GretaArabicAR-Bold.woff') format('woff');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'GretaArabicAR';
          src: url('/fonts/GretaArabicAR-Medium.woff2') format('woff2'),
               url('/fonts/GretaArabicAR-Medium.woff') format('woff');
          font-weight: 500 600;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'GretaArabicAR';
          src: url('/fonts/GretaArabicAR-Light.woff2') format('woff2'),
               url('/fonts/GretaArabicAR-Light.woff') format('woff');
          font-weight: 300 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'NotoNaskhArabic';
          src: url('/fonts/NotoNaskhArabic-SemiBold.woff2') format('woff2');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'NotoNaskhArabic';
          src: url('/fonts/NotoNaskhArabic-Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'NotoNaskhArabic';
          src: url('/fonts/NotoNaskhArabic-Regular.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        * { box-sizing: border-box; }
        body, input, button, p, span, h1, h2, h3, label {
          font-family: 'GretaArabicAR', 'NotoNaskhArabic', sans-serif;
        }
        input::placeholder {
          font-family: 'NotoNaskhArabic', 'GretaArabicAR', sans-serif;
          font-weight: 400;
          color: #aab0bc;
        }
        input:focus { outline: none; }
        .pay-card { transition: all 0.2s; }
        .pay-card:hover { transform: translateY(-1px); }
        .stepper-btn:hover:not(:disabled) { background: #e8e0d4 !important; }
        @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(100%)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(16,22,49,.18)} 50%{box-shadow:0 0 0 8px rgba(16,22,49,0)} }
        @keyframes freeAnim { from{opacity:0;transform:scale(.92)} to{opacity:1;transform:scale(1)} }
      `}</style>

      {/* Navbar — full width bg, constrained content */}
      <div style={{ background: "#101631" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto", padding: "0.85rem 1.25rem", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={() => window.history.back()}
            style={{ position: "absolute", right: "1.25rem", background: "none", border: "none", cursor: "pointer", color: "#f2e3d0", display: "flex", alignItems: "center", padding: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <img src="/images/dkhoun_logo_light.svg" alt="دخون" style={{ height: "28px", objectFit: "contain" }} />
        </div>
      </div>

      {/* Page Title */}
      <div style={{ maxWidth: "480px", margin: "0 auto", padding: "1.25rem 1rem 0" }}>
        <h1 style={{ margin: 0, color: "#101631", fontSize: "18px", fontWeight: 700, textAlign: "center", letterSpacing: "0.04em" }}>اتمــام الطــلب</h1>
      </div>

      <div style={{ maxWidth: "480px", margin: "0 auto", padding: "0 1rem" }}>

        {/* Order Summary */}
        <div style={{ background: "#fff", borderRadius: "16px", marginTop: "12px", overflow: "hidden", boxShadow: "0 1px 4px rgba(16,22,49,0.06)" }}>
          <div style={{ padding: "14px 16px 0" }}>
            <h2 style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 700, color: "#101631", borderRight: "3px solid #f2e3d0", paddingRight: "10px" }}>ملخص الطلب</h2>
          </div>
          <button onClick={() => setOrderOpen(o => !o)}
            style={{ width: "100%", padding: "0 16px 14px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ChevronIcon open={orderOpen} />
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontWeight: 700, fontSize: "15px", color: "#101631" }}>{fmt(subtotal)} <SAR /></span>
                {totalSaving > 0 && (
                  <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 700 }}>وفّرت {fmt(totalSaving)} <SAR /></span>
                )}
              </div>
            </div>
            {!orderOpen ? (
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                {items.map(p => (
                  <div key={p.id} style={{ position: "relative", flexShrink: 0 }}>
                    <img src={p.imgUrl} alt={p.name} onError={e => e.target.src = fallback34}
                      style={{ width: 34, height: 34, borderRadius: "8px", objectFit: "cover", border: "2px solid #f2e3d0", background: "#f9f6f2" }} />
                    {p.qty > 1 && <div style={{ position: "absolute", top: -5, right: -5, background: "#101631", color: "#fff", width: 16, height: 16, borderRadius: "50%", fontSize: "9px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.qty}</div>}
                  </div>
                ))}
              </div>
            ) : (
              <span style={{ fontSize: "13px", color: "#888" }}>{items.length} منتجات</span>
            )}
          </button>

          {orderOpen && (
            <div style={{ borderTop: "1px solid #f5f0eb", animation: "slideDown 0.25s ease" }}>
              {items.map(p => {
                const lineTotal = p.price * p.qty;
                const hasDiscount = p.oldPrice != null && p.oldPrice > p.price;
                const discountPct = hasDiscount ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
                return (
                  <div key={p.id} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 14px", borderBottom: "1px solid #f9f6f2" }}>
                    {/* Image flush to top */}
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <img src={p.imgUrl} alt={p.name} onError={e => e.target.src = fallback60}
                        style={{ width: 64, height: 64, borderRadius: "10px", objectFit: "cover", border: "1.5px solid #f2e3d0", background: "#f9f6f2", display: "block" }} />
                      {hasDiscount && (
                        <div style={{ position: "absolute", top: 5, left: 5, background: "#ef4444", color: "#fff", borderRadius: "5px", padding: "2px 5px", fontSize: "9px", fontWeight: 700, lineHeight: 1 }}>-{discountPct}%</div>
                      )}
                    </div>
                    {/* Middle: name + unit price + offer tag */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "13px", color: "#101631", lineHeight: 1.4 }}>{p.name}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                        {hasDiscount && (
                          <span style={{ fontSize: "11px", color: "#bbb", textDecoration: "line-through", fontWeight: 400 }}>{fmt(p.oldPrice)} <SAR /></span>
                        )}
                        <span style={{ fontSize: "11px", fontWeight: 400, color: "#888" }}>{fmt(p.price)} <SAR /> / وحدة</span>
                      </div>
                      {p.offer && (
                        <div style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "4px" }}>
                          <TagIcon />
                          <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 700 }}>{p.offer}</span>
                        </div>
                      )}
                    </div>
                    {/* Right: line total + stepper below */}
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                      <div style={{ fontWeight: 800, color: "#101631", fontSize: "14px" }}>{fmt(lineTotal)} <SAR /></div>
                      <QtyStepperButton value={p.qty} onInc={() => updateQty(p.id, 1)} onDec={() => updateQty(p.id, -1)} />
                    </div>
                  </div>
                );
              })}
              {/* Saving bar */}
              {totalSaving > 0 && (
                <div style={{ padding: "10px 16px", background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "15px" }}>🎉</span>
                    <span style={{ fontWeight: 700, fontSize: "13px", color: "#ef4444" }}>إجمالي التوفير</span>
                  </div>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#ef4444" }}>{fmt(totalSaving)} <SAR /></span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 16px", background: "#fafafa" }}>
                <span style={{ fontWeight: 600, color: "#101631", fontSize: "14px" }}>المجموع الفرعي</span>
                <span style={{ fontWeight: 700, fontSize: "15px", color: "#101631" }}>{fmt(subtotal)} <SAR /></span>
              </div>
            </div>
          )}
        </div>

        {/* Customer Info */}
        <div style={{ background: "#fff", borderRadius: "16px", marginTop: "12px", padding: "1.25rem", boxShadow: "0 1px 4px rgba(16,22,49,0.06)" }}>
          <h2 style={{ margin: "0 0 1.1rem", fontSize: "15px", fontWeight: 700, color: "#101631", borderRight: "3px solid #f2e3d0", paddingRight: "10px" }}>بيانات التوصيل</h2>

          <div style={{ marginBottom: "14px" }}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="الاسم الكامل"
              style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #ebf0f2", borderRadius: "10px", fontSize: "15px", color: "#101631", background: "#fafafa", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", transition: "border-color 0.2s" }}
              onFocus={e => e.target.style.borderColor = "#101631"} onBlur={e => e.target.style.borderColor = "#ebf0f2"} />
          </div>

          <div style={{ marginBottom: "14px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <input value={location} readOnly placeholder="حدد موقع التوصيل"
                style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #ebf0f2", borderRadius: "10px", fontSize: "14px", color: "#101631", background: "#fafafa", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", cursor: "pointer" }}
                onClick={() => setShowMap(true)} />
              <button onClick={() => setShowMap(true)}
                style={{ padding: "0 16px", background: "#101631", color: "#f2e3d0", border: "none", borderRadius: "10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", fontWeight: 600, flexShrink: 0 }}>
                <MapPinIcon />
                {nationalCode ? <span style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "1px" }}>{nationalCode}</span> : "الخريطة"}
              </button>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", direction: "ltr" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "11px 12px", border: "1.5px solid #ebf0f2", borderRadius: "10px", background: "#fafafa", flexShrink: 0 }}>
                <span style={{ fontSize: "18px", lineHeight: "0px" }}>🇸🇦</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#101631" }}>+966</span>
              </div>
              <div style={{ flex: 1, position: "relative" }}>
                <input value={phone} onChange={e => handlePhoneChange(e.target.value)} placeholder="رقم الجوال" inputMode="numeric"
                  dir={phone.length > 0 ? "ltr" : "rtl"}
                  style={{ width: "100%", padding: "10px 14px", border: `1.5px solid ${phoneVerified ? "#22c55e" : "#ebf0f2"}`, borderRadius: "10px", fontSize: "15px", color: "#101631", background: phoneVerified ? "#f0fdf4" : "#fafafa", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", letterSpacing: "0px", transition: "all 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "#101631"} onBlur={e => !phoneVerified && (e.target.style.borderColor = "#ebf0f2")} />
                {phoneVerified && (
                  <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#22c55e", display: "flex", alignItems: "center" }}>
                    <CheckCircleIcon />
                  </span>
                )}
              </div>
            </div>
            {phone.length > 0 && phone.length < 9 && <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#aab0bc" }}>أدخل 9 أرقام للتحقق التلقائي</p>}
          </div>
        </div>

        {/* Payment */}
        <div style={{ background: "#fff", borderRadius: "16px", marginTop: "12px", padding: "1.25rem", boxShadow: "0 1px 4px rgba(16,22,49,0.06)", opacity: deliveryComplete ? 1 : 0.45, pointerEvents: deliveryComplete ? "auto" : "none", transition: "opacity 0.3s" }}>
          <h2 style={{ margin: "0 0 1rem", fontSize: "15px", fontWeight: 700, color: "#101631", borderRight: "3px solid #f2e3d0", paddingRight: "10px" }}>طريقة الدفع</h2>

          {eligibleFreeShip && (
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "8px 12px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "16px" }}>🚚</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#16a34a" }}>شحن مجاني على Tabby، Tamara، والدفع المسبق!</span>
            </div>
          )}

          {/* BNPL Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
            {[
              { id: "tabby", logo: <TabbyLogo />, split: "4 دفعات بدون فوائد" },
              { id: "tamara", logo: <TamaraLogo />, split: "4 دفعات بدون فوائد" },
            ].map(opt => {
              const badge = shippingBadge(opt.id);
              return (
                <button key={opt.id} onClick={() => setPayMethod(opt.id)} className="pay-card"
                  style={{ padding: "14px 12px", borderRadius: "12px", border: `2px solid ${payMethod === opt.id ? "#101631" : "#ebf0f2"}`, background: payMethod === opt.id ? "#f9f7f4" : "#fafafa", cursor: "pointer", textAlign: "right", position: "relative" }}>
                  {payMethod === opt.id && (
                    <div style={{ position: "absolute", top: "8px", left: "8px", color: "#101631", display: "flex", alignItems: "center" }}>
                      <CheckCircleIcon />
                    </div>
                  )}
                  <div style={{ marginBottom: "8px" }}>{opt.logo}</div>
                  <p style={{ margin: "0 0 2px", fontSize: "11px", fontWeight: 700, color: "#101631", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>{opt.split}</p>
                  <div style={{ display: "flex", gap: "3px", marginTop: "6px" }}>
                    {[1,2,3,4].map(n => (
                      <div key={n} style={{ flex: 1, height: "4px", borderRadius: "2px", background: payMethod === opt.id ? "#101631" : "#e5e7eb", opacity: payMethod === opt.id ? (n === 1 ? 1 : 0.5) : 1 }} />
                    ))}
                  </div>
                  <p style={{ margin: "5px 0 0", fontSize: "11px", color: badge.green ? "#22c55e" : "#888", fontWeight: badge.green ? 700 : 400, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>{badge.text}{badge.showSAR && <> <SAR /></>}</p>
                  {installment && (
                    <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#101631", fontWeight: 700, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>{fmt(installment)} <SAR /> / شهر</p>
                  )}
                </button>
              );
            })}
          </div>

          {/* COD & Prepaid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { id: "cod", icon: "💵", label: "الدفع عند الاستلام" },
              { id: "prepaid", icon: "💳", label: "الدفع المسبق" },
            ].map(opt => {
              const badge = shippingBadge(opt.id);
              return (
                <button key={opt.id} onClick={() => setPayMethod(opt.id)} className="pay-card"
                  style={{ padding: "10px 14px", borderRadius: "12px", border: `2px solid ${payMethod === opt.id ? "#101631" : "#ebf0f2"}`, background: payMethod === opt.id ? "#f9f7f4" : "#fafafa", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>{opt.icon}</span>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontWeight: 700, fontSize: "13px", color: "#101631", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif" }}>{opt.label}</span>
                    <span style={{ fontSize: "11px", color: badge.green ? "#22c55e" : "#999", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", fontWeight: badge.green ? 700 : 400 }}>{badge.text}{badge.showSAR && <> <SAR /></>}</span>
                  </div>
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: `2px solid ${payMethod === opt.id ? "#101631" : "#ccc"}`, background: payMethod === opt.id ? "#101631" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {payMethod === opt.id && <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Order Total + Coupon */}
        {payMethod && (
          <div style={{ background: "#fff", borderRadius: "16px", marginTop: "12px", padding: "1rem 1.25rem", boxShadow: "0 1px 4px rgba(16,22,49,0.06)", animation: "slideDown 0.25s" }}>

            {/* Subtotal */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#888", fontSize: "13px" }}>المجموع الفرعي</span>
              <span style={{ fontWeight: 600, color: "#101631", fontSize: "13px" }}>{fmt(subtotal)} <SAR /></span>
            </div>

            {/* Coupon discount line */}
            {couponDiscount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ color: "#16a34a", fontSize: "13px", fontWeight: 600 }}>
                  خصم الكوبون
                </span>
                <span style={{ fontWeight: 600, color: "#16a34a", fontSize: "13px" }}>- {fmt(couponDiscount)} <SAR /></span>
              </div>
            )}

            {/* Shipping */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#888", fontSize: "13px" }}>الشحن</span>
              {isFreeShip && !isCOD ? (
                <span style={{ fontWeight: 700, color: "#22c55e", fontSize: "13px" }}>مجاني 🎉</span>
              ) : (
                <span style={{ fontWeight: 600, color: "#101631", fontSize: "13px" }}>{fmt(shipping)} <SAR /></span>
              )}
            </div>

            {/* Coupon input */}
            <div style={{ borderTop: "1px solid #f2e3d0", paddingTop: "10px", marginBottom: "10px" }}>
              <div style={{ display: "flex", gap: "8px", direction: "ltr", alignItems: "flex-start" }}>
                {/* Input + message grouped */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                  <div style={{ position: "relative" }}>
                    <input
                      value={coupon}
                      onChange={e => { setCoupon(e.target.value); setCouponStatus(null); }}
                      onKeyDown={e => e.key === "Enter" && applyCoupon()}
                      placeholder="أدخل كود الخصم إن وجد"
                      dir={coupon.length > 0 ? "ltr" : "rtl"}
                      style={{ width: "100%", boxSizing: "border-box", padding: couponStatus?.valid ? "9px 12px 9px 36px" : "9px 12px", border: `1.5px solid ${couponStatus?.valid ? "#22c55e" : couponStatus?.valid === false ? "#ef4444" : "#ebf0f2"}`, borderRadius: "10px", fontSize: "13px", color: "#101631", background: couponStatus?.valid ? "#f0fdf4" : "#fafafa", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", outline: "none", transition: "all 0.2s" }}
                    />
                    {couponStatus?.valid && (
                      <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#22c55e", display: "flex", alignItems: "center", pointerEvents: "none" }}>
                        <CheckCircleIcon />
                      </span>
                    )}
                  </div>
                  {couponStatus && (
                    <p style={{ margin: 0, fontSize: "12px", color: couponStatus.valid ? "#22c55e" : "#ef4444", fontWeight: 600, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", display: "flex", alignItems: "center", gap: "4px", direction: "rtl" }}>
                      {couponStatus.valid ? <ReceiptPercentIcon /> : "✕ "}{couponStatus.msg}
                    </p>
                  )}
                </div>
                <button
                  onClick={applyCoupon}
                  style={{ padding: "9px 16px", borderRadius: "10px", background: "#ebf0f2", color: "#101631", border: "none", cursor: "pointer", fontSize: "13px", fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", fontWeight: 700, flexShrink: 0, whiteSpace: "nowrap" }}>
                  تطبيق
                </button>
              </div>
            </div>

            {/* Total */}
            <div style={{ borderTop: "1px solid #f2e3d0", paddingTop: "8px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontWeight: 700, fontSize: "15px", color: "#101631" }}>
                {isTabbyTamara ? "القسط الأول" : "الإجمالي"}
              </span>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontWeight: 800, fontSize: "17px", color: "#101631" }}>
                  {isTabbyTamara ? <>{fmt(installment)} <SAR /></> : <>{fmt(totalAfterCoupon)} <SAR /></>}
                </span>
                {isTabbyTamara && (
                  <div style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>
                    الإجمالي {fmt(totalAfterCoupon)} <SAR /> على 4 دفعات
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Sticky CTA Footer */}
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 200, background: "rgba(245,240,235,0.92)", backdropFilter: "blur(10px)", borderTop: "1px solid #e8e0d4" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto", padding: "12px 16px 20px" }}>
          <button style={{ width: "100%", padding: "17px", borderRadius: "14px", background: btnReady ? "#101631" : "#c8cdd6", color: btnReady ? "#f2e3d0" : "#fff", border: "none", cursor: btnReady ? "pointer" : "not-allowed", fontSize: "16px", fontWeight: 700, fontFamily: "'GretaArabicAR', 'NotoNaskhArabic', sans-serif", transition: "all 0.3s", animation: btnReady ? "pulse 2s infinite" : "none" }}>
            {btnLabel()}
          </button>
          <p style={{ textAlign: "center", fontSize: "11px", color: "#aaa", margin: "8px 0 0" }}>🔒 جميع المعاملات آمنة ومشفرة</p>
        </div>
      </div>

      {showOTP && <OTPModal phone={phone} onSuccess={() => { setPhoneVerified(true); setShowOTP(false); }} onClose={() => setShowOTP(false)} />}
      {showMap && <MapModal onConfirm={(loc) => { setLocation(loc); setShowMap(false); }} onClose={() => setShowMap(false)} />}
    </div>
  );
}
