const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Wong Tran";
pres.title = "VAST Data — Network Training";

// ─── Color Palette (VAST Data brand) ───
const C = {
  navy:     "1E3A5F",
  darkNavy: "0C2340",
  accent:   "0C447C",
  teal:     "0D9488",
  lightBlue:"F0F7FA",
  offWhite: "F7F6F3",
  white:    "FFFFFF",
  text:     "2C2C2A",
  textMuted:"5F5E5A",
  textLight:"8A8985",
  border:   "D3D1C7",
  green:    "22C55E",
  orange:   "F97316",
  coral:    "EF4444",
  blue:     "3B82F6",
  purple:   "7C3AED",
  blueLight:"E6F1FB",
  greenLight:"EAF3DE",
  orangeLight:"FFF7ED",
  coralLight:"FEF2F2",
};

const mkShadow = () => ({ type:"outer", color:"000000", blur:4, offset:2, angle:135, opacity:0.10 });

// ─── VAST Logo base64 ───
const logoPath = "/Users/wongtran/Network Training/vast_logo.png";
const logoBase64 = "image/png;base64," + fs.readFileSync(logoPath).toString("base64");

// ─── Slide Masters ───
pres.defineSlideMaster({
  title: "DARK_TITLE",
  background: { color: C.darkNavy },
  objects: [
    { image: { data: logoBase64, x: 0.5, y: 0.3, w: 0.55, h: 0.48 } },
    { shape: pres.shapes.LINE, options: { x: 0.5, y: 5.15, w: 9.0, h: 0, line: { color: C.teal, width: 1.5 } } },
    { text: { text: "VAST Data — Network Training  |  Wong Tran", options: { x: 0.5, y: 5.2, w: 9, h: 0.3, fontSize: 8, color: "7A9BBF", fontFace: "Arial" } } },
  ],
});

pres.defineSlideMaster({
  title: "CONTENT",
  background: { color: C.white },
  objects: [
    { shape: pres.shapes.RECTANGLE, options: { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.teal } } },
    { image: { data: logoBase64, x: 9.05, y: 0.15, w: 0.38, h: 0.33 } },
    { shape: pres.shapes.RECTANGLE, options: { x: 0, y: 5.2, w: 10, h: 0.425, fill: { color: C.offWhite } } },
    { text: { text: "VAST Data — Network Training  |  Wong Tran", options: { x: 0.5, y: 5.28, w: 9, h: 0.25, fontSize: 7, color: C.textLight, fontFace: "Arial" } } },
  ],
});

pres.defineSlideMaster({
  title: "SECTION",
  background: { color: C.navy },
  objects: [
    { shape: pres.shapes.RECTANGLE, options: { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.teal } } },
    { image: { data: logoBase64, x: 0.5, y: 0.3, w: 0.45, h: 0.39 } },
    { shape: pres.shapes.LINE, options: { x: 0.5, y: 5.15, w: 9.0, h: 0, line: { color: C.teal, width: 1 } } },
    { text: { text: "VAST Data — Network Training", options: { x: 0.5, y: 5.2, w: 9, h: 0.3, fontSize: 8, color: "7A9BBF", fontFace: "Arial" } } },
  ],
});

// ═════════════════════════════════════════════
// SLIDE 1: TITLE
// ═════════════════════════════════════════════
let s1 = pres.addSlide({ masterName: "DARK_TITLE" });
s1.addText("VAST Data", { x: 0.5, y: 1.2, w: 9, h: 0.8, fontSize: 44, fontFace: "Arial", bold: true, color: C.white, margin: 0 });
s1.addText("Network Training", { x: 0.5, y: 2.0, w: 9, h: 0.6, fontSize: 28, fontFace: "Arial", color: C.teal, margin: 0 });
s1.addText("Node Networking · Network Design · L2/L3 Topologies", { x: 0.5, y: 2.7, w: 9, h: 0.4, fontSize: 14, fontFace: "Arial", color: "7A9BBF", margin: 0 });
s1.addText("Created by Wong Tran", { x: 0.5, y: 4.3, w: 9, h: 0.3, fontSize: 12, fontFace: "Arial", italic: true, color: "7A9BBF", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 2: AGENDA
// ═════════════════════════════════════════════
let s2 = pres.addSlide({ masterName: "CONTENT" });
s2.addText("Agenda", { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 28, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

const agendaItems = [
  { num: "01", title: "CNode Networking", desc: "Front end & backend interfaces, SR-IOV, bond config, VLAN 69, client VIPs" },
  { num: "02", title: "EBox Networking", desc: "Identical architecture to CNode — expansion box for additional storage" },
  { num: "03", title: "DNode Networking", desc: "Backend-only interfaces, no front end NIC, BlueField DPU management" },
  { num: "04", title: "Converged vs Split Design", desc: "How VAST node NICs connect to the switching fabric" },
  { num: "05", title: "L2/L3 Topologies", desc: "Small (pair), Medium (spine-leaf), Large (EVPN-BGP) deployment patterns" },
];
agendaItems.forEach((item, i) => {
  const y = 1.0 + i * 0.8;
  s2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.55, h: 0.55, fill: { color: C.teal } });
  s2.addText(item.num, { x: 0.5, y, w: 0.55, h: 0.55, fontSize: 16, fontFace: "Arial", bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  s2.addText(item.title, { x: 1.2, y, w: 7.8, h: 0.3, fontSize: 16, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
  s2.addText(item.desc, { x: 1.2, y: y + 0.28, w: 7.8, h: 0.25, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });
});

// ═════════════════════════════════════════════
// SLIDE 3: SECTION — CNode
// ═════════════════════════════════════════════
let s3 = pres.addSlide({ masterName: "SECTION" });
s3.addText("01", { x: 0.5, y: 1.5, w: 1, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.teal, margin: 0 });
s3.addText("CNode Networking", { x: 0.5, y: 2.2, w: 9, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.white, margin: 0 });
s3.addText("Front end & backend interfaces, SR-IOV virtual functions,\nbond configuration, VLAN 69 sub-interfaces, and client VIPs", { x: 0.5, y: 3.0, w: 9, h: 0.7, fontSize: 14, fontFace: "Arial", color: "7A9BBF", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 4: CNode Interface Overview
// ═════════════════════════════════════════════
let s4 = pres.addSlide({ masterName: "CONTENT" });
s4.addText("CNode — Interface Overview (Dual NIC)", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s4.addText("CBox 1U chassis — 4 PCIe buses, 8 physical functions, 2 virtual functions", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

// 3 interface cards
const cards = [
  { title: "Front End Interface", sub: "Data plane — client VIPs", ports: "enp65s0f0  ·  enp65s0f1", color: C.blue, bgColor: C.blueLight },
  { title: "Backend Interface", sub: "Cluster mesh — SR-IOV + bond", ports: "enp1s0f0  ·  enp1s0f1 (PF)\nenp1s0f2  ·  enp1s0f3 (VF)", color: C.teal, bgColor: "E0F2F1" },
  { title: "Gigabit Interface", sub: "Management / spare", ports: "enp194s0f0 (mgmt)\nenp194s0f1, enp193s0f0, enp193s0f1", color: C.textLight, bgColor: C.offWhite },
];
cards.forEach((c, i) => {
  const x = 0.5 + i * 3.1;
  s4.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.9, h: 2.3, fill: { color: c.bgColor }, line: { color: c.color, width: 1.5 }, shadow: mkShadow() });
  s4.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.9, h: 0.06, fill: { color: c.color } });
  s4.addText(c.title, { x: x + 0.15, y: 1.3, w: 2.6, h: 0.3, fontSize: 14, fontFace: "Arial", bold: true, color: c.color, margin: 0 });
  s4.addText(c.sub, { x: x + 0.15, y: 1.6, w: 2.6, h: 0.25, fontSize: 10, fontFace: "Arial", italic: true, color: C.textMuted, margin: 0 });
  s4.addText(c.ports, { x: x + 0.15, y: 2.0, w: 2.6, h: 0.9, fontSize: 10, fontFace: "Consolas", color: C.text, margin: 0 });
});

// Config variants
s4.addText("Configuration Variants", { x: 0.5, y: 3.6, w: 9, h: 0.3, fontSize: 14, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
const variants = [
  ["Dual NIC + Mgmt via Gigabit", "Default — FE NIC for VIPs, mgmt on enp194s0f0"],
  ["Dual NIC + Mgmt via Bond", "Management IP on bond0 instead of gigabit"],
  ["Single NIC + Mgmt via Gigabit", "No FE NIC — VIPs on backend PFs directly"],
  ["Single NIC + Mgmt via Bond", "No FE NIC — VIPs on backend PFs, mgmt on bond0"],
];
variants.forEach((v, i) => {
  const y = 4.0 + i * 0.28;
  s4.addText(v[0], { x: 0.7, y, w: 3.0, h: 0.26, fontSize: 10, fontFace: "Arial", bold: true, color: C.accent, margin: 0 });
  s4.addText(v[1], { x: 3.7, y, w: 5.5, h: 0.26, fontSize: 10, fontFace: "Arial", color: C.textMuted, margin: 0 });
});

// ═════════════════════════════════════════════
// SLIDE 5: SR-IOV Architecture
// ═════════════════════════════════════════════
let s5 = pres.addSlide({ masterName: "CONTENT" });
s5.addText("CNode — SR-IOV Architecture", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s5.addText("ConnectX-7 dual-port NIC with hardware virtualization for HA failover", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

// Left: Port 0 architecture
s5.addText("Physical Port 0", { x: 0.7, y: 1.1, w: 3.5, h: 0.3, fontSize: 13, fontFace: "Arial", bold: true, color: C.teal, align: "center", margin: 0 });
s5.addShape(pres.shapes.RECTANGLE, { x: 1.2, y: 1.5, w: 2.5, h: 0.5, fill: { color: C.teal }, shadow: mkShadow() });
s5.addText("enp1s0f0 — PF", { x: 1.2, y: 1.5, w: 2.5, h: 0.5, fontSize: 12, fontFace: "Consolas", bold: true, color: C.white, align: "center", valign: "middle" });
s5.addText("↓ VF", { x: 1.2, y: 2.05, w: 2.5, h: 0.25, fontSize: 10, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0 });
s5.addShape(pres.shapes.RECTANGLE, { x: 1.2, y: 2.35, w: 2.5, h: 0.5, fill: { color: "F97316" }, shadow: mkShadow() });
s5.addText("enp1s0f2 — VF (SR-IOV)", { x: 1.2, y: 2.35, w: 2.5, h: 0.5, fontSize: 11, fontFace: "Consolas", bold: true, color: C.white, align: "center", valign: "middle" });

// Right: Port 1 architecture
s5.addText("Physical Port 1", { x: 5.5, y: 1.1, w: 3.5, h: 0.3, fontSize: 13, fontFace: "Arial", bold: true, color: C.teal, align: "center", margin: 0 });
s5.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.5, w: 2.5, h: 0.5, fill: { color: C.teal }, shadow: mkShadow() });
s5.addText("enp1s0f1 — PF", { x: 6.0, y: 1.5, w: 2.5, h: 0.5, fontSize: 12, fontFace: "Consolas", bold: true, color: C.white, align: "center", valign: "middle" });
s5.addText("↓ VF", { x: 6.0, y: 2.05, w: 2.5, h: 0.25, fontSize: 10, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0 });
s5.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 2.35, w: 2.5, h: 0.5, fill: { color: "F97316" }, shadow: mkShadow() });
s5.addText("enp1s0f3 — VF (SR-IOV)", { x: 6.0, y: 2.35, w: 2.5, h: 0.5, fontSize: 11, fontFace: "Consolas", bold: true, color: C.white, align: "center", valign: "middle" });

// Bond
s5.addText("ACTIVE", { x: 2.0, y: 2.95, w: 1.2, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.green, align: "center", margin: 0 });
s5.addText("BACKUP", { x: 6.5, y: 2.95, w: 1.2, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", margin: 0 });
s5.addShape(pres.shapes.RECTANGLE, { x: 3.2, y: 3.3, w: 3.4, h: 0.5, fill: { color: C.navy }, shadow: mkShadow() });
s5.addText("bond0 — active-backup (mode 1)", { x: 3.2, y: 3.3, w: 3.4, h: 0.5, fontSize: 12, fontFace: "Consolas", bold: true, color: C.white, align: "center", valign: "middle" });

// Key details
s5.addText("Key Details", { x: 0.5, y: 4.0, w: 9, h: 0.3, fontSize: 13, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s5.addText([
  { text: "• PFs carry direct VLAN 69 sub-interfaces for low-latency cluster mesh", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• VFs are bonded (active-backup) for HA failover — 200 Gbps per VF", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• MII polling interval: 100ms — locally administered MAC addresses", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Bond runs on VFs so PFs remain free for direct cluster mesh paths", options: { fontSize: 10, fontFace: "Arial", color: C.text } },
], { x: 0.7, y: 4.3, w: 8.5, h: 0.85, margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 6: VLAN 69 Mesh Paths
// ═════════════════════════════════════════════
let s6 = pres.addSlide({ masterName: "CONTENT" });
s6.addText("CNode — VLAN 69 Cluster Mesh Paths", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s6.addText("3 independent paths into VLAN 69 for maximum resilience", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

// 3 path cards
const paths = [
  { title: "Path A — PF0 Direct", iface: "enp1s0f0.69", ip: "172.16.1.11/24", prod: "172.16.0.0/18", color: C.teal, desc: "Direct path via Physical Function 0" },
  { title: "Path B — PF1 Direct", iface: "enp1s0f1.69", ip: "172.16.2.11/24", prod: "172.16.64.0/18", color: C.blue, desc: "Direct path via Physical Function 1" },
  { title: "Bond Path", iface: "bond0.69", ip: "172.16.3.11/24", prod: "172.16.128.0/18", color: C.orange, desc: "HA bond path via VF pair (active-backup)" },
];
paths.forEach((p, i) => {
  const x = 0.5 + i * 3.1;
  s6.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.9, h: 2.8, fill: { color: C.white }, line: { color: p.color, width: 2 }, shadow: mkShadow() });
  s6.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.9, h: 0.5, fill: { color: p.color } });
  s6.addText(p.title, { x: x + 0.1, y: 1.15, w: 2.7, h: 0.4, fontSize: 12, fontFace: "Arial", bold: true, color: C.white, margin: 0 });
  s6.addText(p.desc, { x: x + 0.15, y: 1.7, w: 2.6, h: 0.3, fontSize: 10, fontFace: "Arial", color: C.textMuted, margin: 0 });
  s6.addText("Interface", { x: x + 0.15, y: 2.1, w: 2.6, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.textLight, margin: 0 });
  s6.addText(p.iface, { x: x + 0.15, y: 2.3, w: 2.6, h: 0.25, fontSize: 12, fontFace: "Consolas", bold: true, color: C.text, margin: 0 });
  s6.addText("Lab IP", { x: x + 0.15, y: 2.65, w: 2.6, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.textLight, margin: 0 });
  s6.addText(p.ip, { x: x + 0.15, y: 2.85, w: 2.6, h: 0.25, fontSize: 12, fontFace: "Consolas", color: C.text, margin: 0 });
  s6.addText("Production Subnet", { x: x + 0.15, y: 3.2, w: 2.6, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.textLight, margin: 0 });
  s6.addText(p.prod, { x: x + 0.15, y: 3.4, w: 2.6, h: 0.25, fontSize: 12, fontFace: "Consolas", color: C.accent, margin: 0 });
});

s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.1, w: 9.0, h: 0.55, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1 } });
s6.addText("⚠  Production uses /18 subnets, not /24. Lab uses /24 with 172.16.{1,2,3}.x addressing for the 3 paths.", { x: 0.7, y: 4.15, w: 8.6, h: 0.45, fontSize: 10, fontFace: "Arial", color: C.orange, valign: "middle", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 7: Client VIPs
// ═════════════════════════════════════════════
let s7 = pres.addSlide({ masterName: "CONTENT" });
s7.addText("CNode — Client VIP Distribution", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s7.addText("~74 client VIPs load-balanced across both front-end data plane ports", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

// Big stat callouts
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 2.8, h: 1.6, fill: { color: C.blueLight }, line: { color: C.blue, width: 1.5 }, shadow: mkShadow() });
s7.addText("39", { x: 0.5, y: 1.2, w: 2.8, h: 0.8, fontSize: 48, fontFace: "Arial", bold: true, color: C.blue, align: "center", margin: 0 });
s7.addText("IPs on enp65s0f0", { x: 0.5, y: 2.0, w: 2.8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.accent, align: "center", margin: 0 });
s7.addText("Port 0 — Active data plane", { x: 0.5, y: 2.3, w: 2.8, h: 0.25, fontSize: 9, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0 });

s7.addShape(pres.shapes.RECTANGLE, { x: 3.6, y: 1.1, w: 2.8, h: 1.6, fill: { color: C.blueLight }, line: { color: C.blue, width: 1.5 }, shadow: mkShadow() });
s7.addText("35", { x: 3.6, y: 1.2, w: 2.8, h: 0.8, fontSize: 48, fontFace: "Arial", bold: true, color: C.blue, align: "center", margin: 0 });
s7.addText("IPs on enp65s0f1", { x: 3.6, y: 2.0, w: 2.8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.accent, align: "center", margin: 0 });
s7.addText("Port 1 — Active data plane", { x: 3.6, y: 2.3, w: 2.8, h: 0.25, fontSize: 9, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0 });

// Subnet breakdown
s7.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.1, w: 2.8, h: 1.6, fill: { color: C.offWhite }, line: { color: C.border, width: 1 }, shadow: mkShadow() });
s7.addText("VIP Subnets", { x: 6.7, y: 1.2, w: 2.8, h: 0.3, fontSize: 12, fontFace: "Arial", bold: true, color: C.navy, align: "center", margin: 0 });
s7.addText([
  { text: "172.200.0.0/16", options: { breakLine: true, fontSize: 10, fontFace: "Consolas", color: C.purple } },
  { text: "10.10.0.0/16", options: { breakLine: true, fontSize: 10, fontFace: "Consolas", color: C.teal } },
  { text: "192.168.x.0/24", options: { fontSize: 10, fontFace: "Consolas", color: C.orange } },
], { x: 6.9, y: 1.6, w: 2.4, h: 0.9, margin: 0 });

// Key points
s7.addText("Key Points", { x: 0.5, y: 3.0, w: 9, h: 0.3, fontSize: 13, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s7.addText([
  { text: "• VIPs distributed roughly evenly across both data plane ports", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Same subnets appear on both ports — VAST load-balances VIP assignments per-port", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Multiple IPs per interface via Linux secondary addresses (no VLAN tags in lab)", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Production: Customers typically use VLANs to segregate client subnets", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• L3 routing via upstream switch SVI/IRB interfaces, not L2 segmentation", options: { fontSize: 10, fontFace: "Arial", color: C.text } },
], { x: 0.7, y: 3.3, w: 8.5, h: 1.2, margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 8: lshw & Bond Status
// ═════════════════════════════════════════════
let s8 = pres.addSlide({ masterName: "CONTENT" });
s8.addText("CNode — Hardware & Bond Status", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

// lshw terminal
s8.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.8, w: 4.6, h: 3.3, fill: { color: "1A1A2E" }, shadow: mkShadow() });
s8.addText("$ lshw -c network -businfo", { x: 0.45, y: 0.85, w: 4.3, h: 0.25, fontSize: 9, fontFace: "Consolas", color: C.green, margin: 0 });
const lshwLines = [
  "pci@0000:c1:00.0  enp193s0f0  Intel Corp",
  "pci@0000:c1:00.1  enp193s0f1  Intel Corp",
  "pci@0000:c2:00.0  enp194s0f0  Intel Corp",
  "pci@0000:c2:00.1  enp194s0f1  Intel Corp",
  "pci@0001:01:00.0  enp1s0f0    ConnectX-7",
  "pci@0001:01:00.1  enp1s0f1    ConnectX-7",
  "pci@0001:01:00.2  enp1s0f2    ConnectX-7 VF",
  "pci@0001:01:00.3  enp1s0f3    ConnectX-7 VF",
  "pci@0001:41:00.0  enp65s0f0   ConnectX-7",
  "pci@0001:41:00.1  enp65s0f1   ConnectX-7",
];
lshwLines.forEach((line, i) => {
  const isVF = line.includes("VF");
  const isFE = line.includes("65s0f");
  const clr = isVF ? "F97316" : isFE ? "3B82F6" : "E0E0E0";
  s8.addText(line, { x: 0.45, y: 1.15 + i * 0.27, w: 4.3, h: 0.25, fontSize: 8, fontFace: "Consolas", color: clr, margin: 0 });
});

// Bond status terminal
s8.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 0.8, w: 4.6, h: 3.3, fill: { color: "1A1A2E" }, shadow: mkShadow() });
s8.addText("$ cat /proc/net/bonding/bond0", { x: 5.25, y: 0.85, w: 4.3, h: 0.25, fontSize: 9, fontFace: "Consolas", color: C.green, margin: 0 });
const bondLines = [
  { t: "Mode: fault-tolerance (active-backup)", c: "E0E0E0" },
  { t: "Primary Slave: None", c: "E0E0E0" },
  { t: "Active Slave: enp1s0f2", c: "22C55E" },
  { t: "MII Polling: 100 ms", c: "E0E0E0" },
  { t: "", c: "E0E0E0" },
  { t: "Slave: enp1s0f2 (ACTIVE)", c: "22C55E" },
  { t: "  Speed: 200000 Mbps  Duplex: full", c: "E0E0E0" },
  { t: "  MAC: 4a:cb:92:8a:b1:54", c: "E0E0E0" },
  { t: "", c: "E0E0E0" },
  { t: "Slave: enp1s0f3 (BACKUP)", c: "F97316" },
  { t: "  Speed: 200000 Mbps  Duplex: full", c: "E0E0E0" },
  { t: "  MAC: a2:ae:c4:a3:de:81", c: "E0E0E0" },
];
bondLines.forEach((line, i) => {
  s8.addText(line.t, { x: 5.25, y: 1.15 + i * 0.23, w: 4.3, h: 0.21, fontSize: 8, fontFace: "Consolas", color: line.c, margin: 0 });
});

// Summary
s8.addText("10 network devices across 4 PCIe buses  ·  2 VFs bonded at 200 Gbps each  ·  3 VLAN 69 sub-interfaces  ·  ~74 client VIPs", {
  x: 0.3, y: 4.3, w: 9.4, h: 0.5, fontSize: 10, fontFace: "Arial", color: C.textMuted, align: "center", margin: 0
});

// ═════════════════════════════════════════════
// SLIDE 9: Single NIC vs Dual NIC
// ═════════════════════════════════════════════
let s9 = pres.addSlide({ masterName: "CONTENT" });
s9.addText("Single NIC vs Dual NIC", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

// Dual NIC column
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.9, w: 4.3, h: 3.8, fill: { color: C.blueLight }, line: { color: C.blue, width: 1.5 }, shadow: mkShadow() });
s9.addText("Dual NIC", { x: 0.5, y: 0.95, w: 4.3, h: 0.45, fontSize: 18, fontFace: "Arial", bold: true, color: C.blue, align: "center", valign: "middle" });
s9.addText([
  { text: "Front End NIC (2 ports)", options: { breakLine: true, bold: true, fontSize: 11, fontFace: "Arial", color: C.text } },
  { text: "  enp65s0f0, enp65s0f1", options: { breakLine: true, fontSize: 10, fontFace: "Consolas", color: C.blue } },
  { text: "  → Dedicated to client VIPs only", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.textMuted } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "Backend NIC (2 ports + 2 VFs)", options: { breakLine: true, bold: true, fontSize: 11, fontFace: "Arial", color: C.text } },
  { text: "  enp1s0f0/1 (PF), enp1s0f2/3 (VF)", options: { breakLine: true, fontSize: 10, fontFace: "Consolas", color: C.teal } },
  { text: "  → Cluster mesh via VLAN 69", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.textMuted } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "Total: 10 devices, 4 PCIe buses", options: { breakLine: true, bold: true, fontSize: 11, fontFace: "Arial", color: C.navy } },
  { text: "Separate data plane & cluster mesh paths", options: { fontSize: 10, fontFace: "Arial", color: C.textMuted } },
], { x: 0.7, y: 1.5, w: 3.9, h: 3.0, margin: 0 });

// Single NIC column
s9.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.9, w: 4.3, h: 3.8, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1.5 }, shadow: mkShadow() });
s9.addText("Single NIC", { x: 5.2, y: 0.95, w: 4.3, h: 0.45, fontSize: 18, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle" });
s9.addText([
  { text: "No Front End NIC", options: { breakLine: true, bold: true, fontSize: 11, fontFace: "Arial", color: C.coral } },
  { text: "  enp65s0f0/1 do not exist", options: { breakLine: true, fontSize: 10, fontFace: "Consolas", color: C.coral } },
  { text: "  → VIPs assigned to backend PFs", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.textMuted } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "Backend NIC (2 ports + 2 VFs)", options: { breakLine: true, bold: true, fontSize: 11, fontFace: "Arial", color: C.text } },
  { text: "  enp1s0f0/1 carry VIPs + mesh", options: { breakLine: true, fontSize: 10, fontFace: "Consolas", color: C.teal } },
  { text: "  → SR-IOV separates VIP from mesh", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.textMuted } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "Total: 8 devices, 3 PCIe buses", options: { breakLine: true, bold: true, fontSize: 11, fontFace: "Arial", color: C.navy } },
  { text: "Shared NIC — traffic separated via SR-IOV", options: { fontSize: 10, fontFace: "Arial", color: C.textMuted } },
], { x: 5.4, y: 1.5, w: 3.9, h: 3.0, margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 10: SECTION — DNode
// ═════════════════════════════════════════════
let s10 = pres.addSlide({ masterName: "SECTION" });
s10.addText("02–03", { x: 0.5, y: 1.5, w: 1.5, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.teal, margin: 0 });
s10.addText("EBox & DNode Networking", { x: 0.5, y: 2.2, w: 9, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.white, margin: 0 });
s10.addText("EBox mirrors CNode architecture  ·  DNode is backend-only (no front end NIC)", { x: 0.5, y: 3.0, w: 9, h: 0.5, fontSize: 14, fontFace: "Arial", color: "7A9BBF", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 11: DNode Key Differences
// ═════════════════════════════════════════════
let s11 = pres.addSlide({ masterName: "CONTENT" });
s11.addText("DNode — Key Differences from CNode/EBox", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s11.addText("DNodes serve storage only — no front end interfaces, no client VIPs", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

// Comparison table
const tableRows = [
  [
    { text: "Feature", options: { bold: true, color: "FFFFFF", fill: { color: C.navy }, fontSize: 11, fontFace: "Arial" } },
    { text: "CNode / EBox", options: { bold: true, color: "FFFFFF", fill: { color: C.navy }, fontSize: 11, fontFace: "Arial" } },
    { text: "DNode", options: { bold: true, color: "FFFFFF", fill: { color: C.navy }, fontSize: 11, fontFace: "Arial" } },
  ],
  [
    { text: "Front End NIC", options: { bold: true, fontSize: 10, fontFace: "Arial" } },
    { text: "enp65s0f0 / enp65s0f1\nConnectX-7 (client VIPs)", options: { fontSize: 9, fontFace: "Arial" } },
    { text: "None\nDNodes have no front end", options: { fontSize: 9, fontFace: "Arial", color: C.coral } },
  ],
  [
    { text: "Backend NIC", options: { bold: true, fontSize: 10, fontFace: "Arial" } },
    { text: "enp1s0f0 / enp1s0f1\n+ VFs enp1s0f2/3", options: { fontSize: 9, fontFace: "Arial" } },
    { text: "enp3s0f0 / enp3s0f1\n+ VFs enp3s0f2/3", options: { fontSize: 9, fontFace: "Arial", color: C.teal } },
  ],
  [
    { text: "Gigabit Mgmt", options: { bold: true, fontSize: 10, fontFace: "Arial" } },
    { text: "enp194s0f0 (direct IP)\n10.143.11.204/16", options: { fontSize: 9, fontFace: "Arial" } },
    { text: "enp9s0 + VLAN sub-ifs\nVLAN 70/71/99 + tmfifo_net0", options: { fontSize: 9, fontFace: "Arial", color: C.teal } },
  ],
  [
    { text: "VLAN 69 IPs", options: { bold: true, fontSize: 10, fontFace: "Arial" } },
    { text: "172.16.{1,2,3}.11/24", options: { fontSize: 9, fontFace: "Consolas" } },
    { text: "172.16.{1,2,3}.112/24", options: { fontSize: 9, fontFace: "Consolas" } },
  ],
  [
    { text: "BlueField DPU", options: { bold: true, fontSize: 10, fontFace: "Arial" } },
    { text: "N/A", options: { fontSize: 9, fontFace: "Arial", color: C.textLight } },
    { text: "tmfifo_net0\n169.254.102.2/30 (BMC access)", options: { fontSize: 9, fontFace: "Arial", color: C.teal } },
  ],
  [
    { text: "Chassis", options: { bold: true, fontSize: 10, fontFace: "Arial" } },
    { text: "CBox/EBox 1U", options: { fontSize: 9, fontFace: "Arial" } },
    { text: "DBox — 2 DNodes per box", options: { fontSize: 9, fontFace: "Arial" } },
  ],
];
s11.addTable(tableRows, { x: 0.5, y: 1.1, w: 9.0, colW: [1.5, 3.5, 4.0], border: { pt: 0.5, color: C.border }, rowH: [0.35, 0.5, 0.5, 0.5, 0.4, 0.5, 0.4] });

s11.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.3, w: 9.0, h: 0.5, fill: { color: "E0F2F1" }, line: { color: C.teal, width: 1 } });
s11.addText("DNode uses BlueField DPU with tmfifo_net0 for out-of-band BMC management at 169.254.102.2/30", {
  x: 0.7, y: 4.35, w: 8.6, h: 0.4, fontSize: 10, fontFace: "Arial", color: C.teal, valign: "middle", margin: 0
});

// ═════════════════════════════════════════════
// SLIDE 12: SECTION — Converged vs Split
// ═════════════════════════════════════════════
let s12 = pres.addSlide({ masterName: "SECTION" });
s12.addText("04", { x: 0.5, y: 1.5, w: 1, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.teal, margin: 0 });
s12.addText("Converged vs Split", { x: 0.5, y: 2.2, w: 9, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.white, margin: 0 });
s12.addText("How VAST node NICs connect to the switching fabric —\nthe foundation of your network design", { x: 0.5, y: 3.0, w: 9, h: 0.7, fontSize: 14, fontFace: "Arial", color: "7A9BBF", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 13: 3 Network Designs Overview
// ═════════════════════════════════════════════
let s13 = pres.addSlide({ masterName: "CONTENT" });
s13.addText("Network Design Options", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

const designs = [
  { title: "Converged\nDual NIC", badge: "Cisco EBox Only", badgeColor: C.coral, desc: "Frontend & backend NICs both connect to the same VAST leaf pair. Customer switches uplink to VAST leafs.", benefits: "Fewer switches · Simpler cabling · Lower cost", considerations: "Shared bandwidth · Switch failure impacts both traffic types", color: C.blue },
  { title: "Converged\nSingle NIC", badge: "CBox / EBox", badgeColor: C.teal, desc: "Backend NIC only — VIPs & cluster mesh share one NIC via SR-IOV. PF carries mesh, VF carries VIPs.", benefits: "Minimum hardware · No frontend NIC needed", considerations: "All traffic on one NIC · Requires SR-IOV", color: C.teal },
  { title: "Split", badge: "All Platforms", badgeColor: C.navy, desc: "Separate domains: Frontend NIC → customer switches (VIPs), Backend NIC → VAST leaf pair (cluster mesh).", benefits: "Traffic isolation · Independent failure domains", considerations: "More switches · Complex cabling · Higher cost", color: C.orange },
];
designs.forEach((d, i) => {
  const x = 0.3 + i * 3.2;
  s13.addShape(pres.shapes.RECTANGLE, { x, y: 0.85, w: 3.0, h: 4.0, fill: { color: C.white }, line: { color: d.color, width: 2 }, shadow: mkShadow() });
  s13.addShape(pres.shapes.RECTANGLE, { x, y: 0.85, w: 3.0, h: 0.07, fill: { color: d.color } });
  s13.addText(d.title, { x: x + 0.15, y: 1.0, w: 2.7, h: 0.6, fontSize: 15, fontFace: "Arial", bold: true, color: d.color, align: "center", margin: 0 });
  // Badge
  s13.addShape(pres.shapes.RECTANGLE, { x: x + 0.5, y: 1.7, w: 2.0, h: 0.28, fill: { color: d.badgeColor } });
  s13.addText(d.badge, { x: x + 0.5, y: 1.7, w: 2.0, h: 0.28, fontSize: 9, fontFace: "Arial", bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  // Desc
  s13.addText(d.desc, { x: x + 0.15, y: 2.15, w: 2.7, h: 0.9, fontSize: 10, fontFace: "Arial", color: C.textMuted, margin: 0 });
  // Benefits
  s13.addText("Benefits", { x: x + 0.15, y: 3.1, w: 2.7, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.green, margin: 0 });
  s13.addText(d.benefits, { x: x + 0.15, y: 3.3, w: 2.7, h: 0.5, fontSize: 9, fontFace: "Arial", color: C.text, margin: 0 });
  // Considerations
  s13.addText("Considerations", { x: x + 0.15, y: 3.85, w: 2.7, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, margin: 0 });
  s13.addText(d.considerations, { x: x + 0.15, y: 4.05, w: 2.7, h: 0.6, fontSize: 9, fontFace: "Arial", color: C.text, margin: 0 });
});

// ═════════════════════════════════════════════
// SLIDE 14: Converged Dual NIC Topology
// ═════════════════════════════════════════════
let s14 = pres.addSlide({ masterName: "CONTENT" });
s14.addText("Converged — Dual NIC Topology", { x: 0.5, y: 0.15, w: 7.5, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s14.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 0.2, w: 2.0, h: 0.3, fill: { color: C.coralLight }, line: { color: C.coral, width: 1 } });
s14.addText("⚠ Cisco EBox Only", { x: 7.5, y: 0.2, w: 2.0, h: 0.3, fontSize: 9, fontFace: "Arial", bold: true, color: C.coral, align: "center", valign: "middle", margin: 0 });

// Topology diagram using shapes
// Client Servers
s14.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 0.7, w: 2.5, h: 0.5, fill: { color: C.offWhite }, line: { color: C.border, width: 1.5 }, shadow: mkShadow() });
s14.addText("Client Servers (NFS/SMB/S3)", { x: 3.5, y: 0.7, w: 2.5, h: 0.5, fontSize: 9, fontFace: "Arial", bold: true, color: C.text, align: "center", valign: "middle", margin: 0 });

// Customer Switches
s14.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 1.6, w: 2.5, h: 0.5, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1.5 }, shadow: mkShadow() });
s14.addText("Customer SW-1 (MLAG)", { x: 1.0, y: 1.6, w: 2.5, h: 0.5, fontSize: 9, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });
s14.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.6, w: 2.5, h: 0.5, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1.5 }, shadow: mkShadow() });
s14.addText("Customer SW-2 (MLAG)", { x: 6.0, y: 1.6, w: 2.5, h: 0.5, fontSize: 9, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });

// VAST Switching Domain box
s14.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.5, w: 8.1, h: 0.85, fill: { color: C.white }, line: { color: C.orange, width: 1.5, dashType: "dash" } });
s14.addText("VAST Switching Domain", { x: 3.5, y: 2.45, w: 2.5, h: 0.2, fontSize: 8, fontFace: "Arial", bold: true, color: C.orange, align: "center", margin: 0 });

// VAST Leaf switches
s14.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 2.7, w: 2.5, h: 0.5, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1.5 }, shadow: mkShadow() });
s14.addText("VAST Leaf-1 (MLAG)", { x: 1.0, y: 2.7, w: 2.5, h: 0.5, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });
s14.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 2.7, w: 2.5, h: 0.5, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1.5 }, shadow: mkShadow() });
s14.addText("VAST Leaf-2 (MLAG)", { x: 6.0, y: 2.7, w: 2.5, h: 0.5, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });

// VAST Server
s14.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.8, w: 7.5, h: 0.85, fill: { color: C.blueLight }, line: { color: C.accent, width: 1.5 }, shadow: mkShadow() });
s14.addText("VAST Server", { x: 1.0, y: 3.8, w: 7.5, h: 0.3, fontSize: 10, fontFace: "Arial", bold: true, color: C.navy, align: "center", margin: 0 });

// Frontend + Backend NICs
s14.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 4.15, w: 2.8, h: 0.4, fill: { color: C.white }, line: { color: C.blue, width: 1 } });
s14.addText("Frontend NIC", { x: 1.3, y: 4.15, w: 2.8, h: 0.4, fontSize: 9, fontFace: "Arial", bold: true, color: C.blue, align: "center", valign: "middle", margin: 0 });
s14.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: 4.15, w: 2.8, h: 0.4, fill: { color: C.white }, line: { color: C.orange, width: 1 } });
s14.addText("Backend NIC", { x: 5.4, y: 4.15, w: 2.8, h: 0.4, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });

// Connection labels
s14.addText("Client VIPs ↓", { x: 3.5, y: 1.25, w: 2.5, h: 0.2, fontSize: 8, fontFace: "Arial", color: C.blue, align: "center", margin: 0 });
s14.addText("↑ uplinks (cross-connected)", { x: 2.5, y: 2.25, w: 4.5, h: 0.2, fontSize: 8, fontFace: "Arial", color: C.textLight, align: "center", margin: 0 });
s14.addText("VIP traffic ↑", { x: 1.3, y: 3.55, w: 2.8, h: 0.2, fontSize: 8, fontFace: "Arial", color: C.blue, align: "center", margin: 0 });
s14.addText("Cluster mesh ↑", { x: 5.4, y: 3.55, w: 2.8, h: 0.2, fontSize: 8, fontFace: "Arial", color: C.orange, align: "center", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 15: Converged Single NIC
// ═════════════════════════════════════════════
let s15 = pres.addSlide({ masterName: "CONTENT" });
s15.addText("Converged — Single NIC Topology", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s15.addText("Backend NIC only — SR-IOV separates VIP from mesh traffic on the same NIC", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

// Same topology but single NIC
s15.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.0, w: 2.5, h: 0.5, fill: { color: C.offWhite }, line: { color: C.border, width: 1.5 }, shadow: mkShadow() });
s15.addText("Client Servers", { x: 3.5, y: 1.0, w: 2.5, h: 0.5, fontSize: 10, fontFace: "Arial", bold: true, color: C.text, align: "center", valign: "middle", margin: 0 });

s15.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 1.9, w: 2.5, h: 0.5, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1.5 }, shadow: mkShadow() });
s15.addText("Customer SW-1", { x: 1.0, y: 1.9, w: 2.5, h: 0.5, fontSize: 10, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });
s15.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.9, w: 2.5, h: 0.5, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1.5 }, shadow: mkShadow() });
s15.addText("Customer SW-2", { x: 6.0, y: 1.9, w: 2.5, h: 0.5, fontSize: 10, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });

// VAST Domain
s15.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.8, w: 8.1, h: 0.85, fill: { color: C.white }, line: { color: C.orange, width: 1.5, dashType: "dash" } });
s15.addText("VAST Switching Domain", { x: 3.5, y: 2.75, w: 2.5, h: 0.2, fontSize: 8, fontFace: "Arial", bold: true, color: C.orange, align: "center", margin: 0 });
s15.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.0, w: 2.5, h: 0.5, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1.5 } });
s15.addText("VAST Leaf-1", { x: 1.0, y: 3.0, w: 2.5, h: 0.5, fontSize: 10, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });
s15.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 3.0, w: 2.5, h: 0.5, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1.5 } });
s15.addText("VAST Leaf-2", { x: 6.0, y: 3.0, w: 2.5, h: 0.5, fontSize: 10, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });

// Server with single NIC
s15.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 4.0, w: 6.5, h: 0.8, fill: { color: C.blueLight }, line: { color: C.accent, width: 1.5 }, shadow: mkShadow() });
s15.addText("VAST Server", { x: 1.5, y: 4.0, w: 6.5, h: 0.3, fontSize: 10, fontFace: "Arial", bold: true, color: C.navy, align: "center", margin: 0 });
s15.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 4.35, w: 4.5, h: 0.35, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1 } });
s15.addText("Backend NIC — VIPs (via SR-IOV VF) + Cluster Mesh (PF)", { x: 2.5, y: 4.35, w: 4.5, h: 0.35, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });

// SR-IOV callout
s15.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 4.0, w: 2.2, h: 0.8, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1 } });
s15.addText([
  { text: "SR-IOV", options: { breakLine: true, bold: true, fontSize: 10, fontFace: "Arial", color: C.orange } },
  { text: "PF → Cluster mesh", options: { breakLine: true, fontSize: 8, fontFace: "Arial", color: C.text } },
  { text: "VF → Client VIPs", options: { fontSize: 8, fontFace: "Arial", color: C.text } },
], { x: 7.6, y: 4.05, w: 2.0, h: 0.7, margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 16: Split Topology
// ═════════════════════════════════════════════
let s16 = pres.addSlide({ masterName: "CONTENT" });
s16.addText("Split Topology — Separate Domains", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s16.addText("Independent switching domains for VIP traffic and cluster mesh", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

// Customer Domain
s16.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 9.0, h: 2.1, fill: { color: C.white }, line: { color: C.blue, width: 1.5, dashType: "dash" } });
s16.addText("Customer Domain", { x: 0.7, y: 0.98, w: 2.0, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.blue, margin: 0 });

s16.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.2, w: 2.5, h: 0.45, fill: { color: C.offWhite }, line: { color: C.border, width: 1 } });
s16.addText("Client Servers", { x: 3.5, y: 1.2, w: 2.5, h: 0.45, fontSize: 9, fontFace: "Arial", bold: true, color: C.text, align: "center", valign: "middle", margin: 0 });

s16.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 1.9, w: 2.2, h: 0.45, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1 } });
s16.addText("Customer SW-1", { x: 1.3, y: 1.9, w: 2.2, h: 0.45, fontSize: 9, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });
s16.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.9, w: 2.2, h: 0.45, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1 } });
s16.addText("Customer SW-2", { x: 6.0, y: 1.9, w: 2.2, h: 0.45, fontSize: 9, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });

// VAST Server (middle)
s16.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 2.7, w: 7.0, h: 0.8, fill: { color: C.blueLight }, line: { color: C.accent, width: 1.5 }, shadow: mkShadow() });
s16.addText("VAST Server", { x: 1.3, y: 2.7, w: 7.0, h: 0.25, fontSize: 10, fontFace: "Arial", bold: true, color: C.navy, align: "center", margin: 0 });
s16.addShape(pres.shapes.RECTANGLE, { x: 1.6, y: 3.0, w: 2.5, h: 0.35, fill: { color: C.white }, line: { color: C.blue, width: 1 } });
s16.addText("Frontend NIC → VIPs", { x: 1.6, y: 3.0, w: 2.5, h: 0.35, fontSize: 9, fontFace: "Arial", bold: true, color: C.blue, align: "center", valign: "middle", margin: 0 });
s16.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 3.0, w: 2.5, h: 0.35, fill: { color: C.white }, line: { color: C.orange, width: 1 } });
s16.addText("Backend NIC → Mesh", { x: 5.5, y: 3.0, w: 2.5, h: 0.35, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });

// VAST Backend Domain
s16.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.7, w: 9.0, h: 1.1, fill: { color: C.white }, line: { color: C.orange, width: 1.5, dashType: "dash" } });
s16.addText("VAST Backend Domain", { x: 0.7, y: 3.73, w: 2.0, h: 0.2, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, margin: 0 });

s16.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 4.0, w: 2.2, h: 0.45, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1 } });
s16.addText("VAST Leaf-1", { x: 1.3, y: 4.0, w: 2.2, h: 0.45, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });
s16.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 4.0, w: 2.2, h: 0.45, fill: { color: C.orangeLight }, line: { color: C.orange, width: 1 } });
s16.addText("VAST Leaf-2", { x: 6.0, y: 4.0, w: 2.2, h: 0.45, fontSize: 9, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle", margin: 0 });

s16.addText("Separate switching domains — independent failure, dedicated bandwidth per traffic type", {
  x: 0.5, y: 4.85, w: 9.0, h: 0.25, fontSize: 9, fontFace: "Arial", italic: true, color: C.textMuted, align: "center", margin: 0
});

// ═════════════════════════════════════════════
// SLIDE 17: SECTION — L2/L3 Topologies
// ═════════════════════════════════════════════
let s17 = pres.addSlide({ masterName: "SECTION" });
s17.addText("05", { x: 0.5, y: 1.5, w: 1, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.teal, margin: 0 });
s17.addText("L2 / L3 Topologies", { x: 0.5, y: 2.2, w: 9, h: 0.7, fontSize: 36, fontFace: "Arial", bold: true, color: C.white, margin: 0 });
s17.addText("Standard VAST Data fabric patterns — Small (pair), Medium (spine-leaf), Large (EVPN-BGP)", { x: 0.5, y: 3.0, w: 9, h: 0.5, fontSize: 14, fontFace: "Arial", color: "7A9BBF", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 18: Topology Size Categories
// ═════════════════════════════════════════════
let s18 = pres.addSlide({ masterName: "CONTENT" });
s18.addText("Deployment Size Categories", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

const sizes = [
  { label: "S", title: "Small", proto: "L2 — Pair Switches", desc: "Simple MLAG switch pair without a spine layer. Cluster won't exceed port count of a single leaf pair.", switches: "2 VAST switches", color: C.teal },
  { label: "M", title: "Medium", proto: "L2 — Spine-Leaf", desc: "Spine-leaf fabric with MLAG. Cluster won't exceed port count of the spine pair. Full mesh leaf↔spine.", switches: "2 Spines + 4 Leaves", color: C.blue },
  { label: "L", title: "Large", proto: "L3 — EVPN-BGP (VXLAN)", desc: "BGP underlay + VXLAN overlay for 100+ node clusters. 3 spines for odd-number quorum. Scalable.", switches: "3 Spines + N Leaves", color: C.navy },
];
sizes.forEach((s, i) => {
  const y = 0.9 + i * 1.4;
  // Size badge
  s18.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.7, h: 0.7, fill: { color: s.color }, shadow: mkShadow() });
  s18.addText(s.label, { x: 0.5, y, w: 0.7, h: 0.7, fontSize: 28, fontFace: "Arial", bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  // Content
  s18.addShape(pres.shapes.RECTANGLE, { x: 1.4, y, w: 8.1, h: 1.15, fill: { color: C.white }, line: { color: s.color, width: 1.5 }, shadow: mkShadow() });
  s18.addText(s.title + "  —  " + s.proto, { x: 1.6, y: y + 0.05, w: 7.7, h: 0.3, fontSize: 14, fontFace: "Arial", bold: true, color: s.color, margin: 0 });
  s18.addText(s.desc, { x: 1.6, y: y + 0.4, w: 5.5, h: 0.4, fontSize: 10, fontFace: "Arial", color: C.textMuted, margin: 0 });
  s18.addText(s.switches, { x: 7.5, y: y + 0.4, w: 1.8, h: 0.3, fontSize: 10, fontFace: "Arial", bold: true, color: s.color, align: "center", margin: 0 });
});

// Uplink modes
s18.addText("Each size supports two uplink modes:", { x: 0.5, y: 4.4, w: 9, h: 0.25, fontSize: 11, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s18.addText([
  { text: "Isolated", options: { bold: true, fontSize: 10, color: C.orange } },
  { text: " — VAST fabric not connected to customer network (Split design)          ", options: { fontSize: 10, color: C.textMuted } },
  { text: "Connected", options: { bold: true, fontSize: 10, color: C.teal } },
  { text: " — VAST spines/leafs cross-connect to customer switches (Converged)", options: { fontSize: 10, color: C.textMuted } },
], { x: 0.7, y: 4.65, w: 8.6, h: 0.4, fontFace: "Arial", margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 19: Small Topology Detail
// ═════════════════════════════════════════════
let s19 = pres.addSlide({ masterName: "CONTENT" });
s19.addText("Small — Pair Switches (L2)", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

// Isolated
s19.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.85, w: 4.6, h: 3.8, fill: { color: C.white }, line: { color: C.orange, width: 1.5 }, shadow: mkShadow() });
s19.addText("Isolated (Split)", { x: 0.3, y: 0.85, w: 4.6, h: 0.35, fontSize: 13, fontFace: "Arial", bold: true, color: C.orange, align: "center", valign: "middle" });

s19.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 1.4, w: 2.6, h: 0.4, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1 } });
s19.addText("Customer MLAG Pair", { x: 1.3, y: 1.4, w: 2.6, h: 0.4, fontSize: 9, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });

s19.addShape(pres.shapes.RECTANGLE, { x: 1.3, y: 2.2, w: 2.6, h: 0.4, fill: { color: C.blueLight }, line: { color: C.accent, width: 1 } });
s19.addText("VAST MLAG Pair", { x: 1.3, y: 2.2, w: 2.6, h: 0.4, fontSize: 9, fontFace: "Arial", bold: true, color: C.accent, align: "center", valign: "middle", margin: 0 });

s19.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 2.9, w: 3.6, h: 0.5, fill: { color: C.blueLight }, line: { color: C.blue, width: 1 } });
s19.addText("VAST EBox / CBox servers", { x: 0.8, y: 2.9, w: 3.6, h: 0.5, fontSize: 9, fontFace: "Arial", color: C.navy, align: "center", valign: "middle", margin: 0 });

s19.addText("FE NIC → Customer switches\nBE NIC → VAST MLAG pair\nNo cross-connect between domains", { x: 0.6, y: 3.6, w: 4.0, h: 0.9, fontSize: 9, fontFace: "Arial", color: C.textMuted, margin: 0 });

// Connected
s19.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 0.85, w: 4.6, h: 3.8, fill: { color: C.white }, line: { color: C.teal, width: 1.5 }, shadow: mkShadow() });
s19.addText("Connected (Converged)", { x: 5.1, y: 0.85, w: 4.6, h: 0.35, fontSize: 13, fontFace: "Arial", bold: true, color: C.teal, align: "center", valign: "middle" });

s19.addShape(pres.shapes.RECTANGLE, { x: 6.1, y: 1.4, w: 2.6, h: 0.4, fill: { color: "EDE9FE" }, line: { color: C.purple, width: 1 } });
s19.addText("Customer MLAG Pair", { x: 6.1, y: 1.4, w: 2.6, h: 0.4, fontSize: 9, fontFace: "Arial", bold: true, color: C.purple, align: "center", valign: "middle", margin: 0 });

s19.addText("↕ cross-connect", { x: 6.1, y: 1.85, w: 2.6, h: 0.2, fontSize: 8, fontFace: "Arial", color: C.teal, align: "center", margin: 0 });

s19.addShape(pres.shapes.RECTANGLE, { x: 6.1, y: 2.2, w: 2.6, h: 0.4, fill: { color: C.blueLight }, line: { color: C.accent, width: 1 } });
s19.addText("VAST MLAG Pair", { x: 6.1, y: 2.2, w: 2.6, h: 0.4, fontSize: 9, fontFace: "Arial", bold: true, color: C.accent, align: "center", valign: "middle", margin: 0 });

s19.addShape(pres.shapes.RECTANGLE, { x: 5.6, y: 2.9, w: 3.6, h: 0.5, fill: { color: C.blueLight }, line: { color: C.blue, width: 1 } });
s19.addText("VAST EBox / CBox servers", { x: 5.6, y: 2.9, w: 3.6, h: 0.5, fontSize: 9, fontFace: "Arial", color: C.navy, align: "center", valign: "middle", margin: 0 });

s19.addText("Both NICs → VAST MLAG pair\nCustomer SWs uplink to VAST pair\nSimpler, fewer switches overall", { x: 5.4, y: 3.6, w: 4.0, h: 0.9, fontSize: 9, fontFace: "Arial", color: C.textMuted, margin: 0 });

// ═════════════════════════════════════════════
// SLIDE 20: Medium & Large Summary
// ═════════════════════════════════════════════
let s20 = pres.addSlide({ masterName: "CONTENT" });
s20.addText("Medium & Large Topologies", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

// Medium
s20.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.8, w: 4.6, h: 2.3, fill: { color: C.white }, line: { color: C.blue, width: 1.5 }, shadow: mkShadow() });
s20.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.8, w: 4.6, h: 0.06, fill: { color: C.blue } });
s20.addText("Medium — L2 Spine-Leaf", { x: 0.5, y: 0.9, w: 4.2, h: 0.3, fontSize: 14, fontFace: "Arial", bold: true, color: C.blue, margin: 0 });
s20.addText([
  { text: "• 2 Spine switches + 4 Leaf switches", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Full mesh: each leaf uplinks to both spines", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• MLAG active-active forwarding with ISL failover", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Servers dual-home to both switches in each leaf pair", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Isolated: fabric not connected to customer network", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Connected: spines cross-connect to customer MLAG", options: { fontSize: 10, fontFace: "Arial", color: C.text } },
], { x: 0.5, y: 1.3, w: 4.2, h: 1.6, margin: 0 });

// Large
s20.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 0.8, w: 4.6, h: 2.3, fill: { color: C.white }, line: { color: C.navy, width: 1.5 }, shadow: mkShadow() });
s20.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 0.8, w: 4.6, h: 0.06, fill: { color: C.navy } });
s20.addText("Large — L3 EVPN-BGP", { x: 5.3, y: 0.9, w: 4.2, h: 0.3, fontSize: 14, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s20.addText([
  { text: "• 3 Spine switches (odd-number quorum)", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• BGP underlay + VXLAN overlay", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Full mesh: each leaf peers with all 3 spines", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Scalable to 100+ nodes", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Isolated: completely separate from customer fabric", options: { breakLine: true, fontSize: 10, fontFace: "Arial", color: C.text } },
  { text: "• Connected: 6 BGP sessions (3 spines × 2 customer SWs)", options: { fontSize: 10, fontFace: "Arial", color: C.text } },
], { x: 5.3, y: 1.3, w: 4.2, h: 1.6, margin: 0 });

// Failure scenarios
s20.addText("Failure Scenarios & Redundancy", { x: 0.5, y: 3.3, w: 9, h: 0.3, fontSize: 14, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });

const failures = [
  { title: "Switch Fails", desc: "MLAG partner takes over all forwarding. Servers dual-homed to both — retain connectivity.", color: C.coral },
  { title: "Spine Fails", desc: "Remaining spine(s) carry full load. Leaf-to-leaf still reachable via surviving spines.", color: C.orange },
  { title: "Single Cable Fails", desc: "Server retains connectivity via other NIC to partner switch. MLAG handles re-routing.", color: C.blue },
  { title: "Server NIC Fails", desc: "Bond failover to backup VF. Active-backup mode 1 switches within 100ms MII polling.", color: C.teal },
];
failures.forEach((f, i) => {
  const x = 0.3 + i * 2.4;
  s20.addShape(pres.shapes.RECTANGLE, { x, y: 3.7, w: 2.2, h: 1.2, fill: { color: C.white }, line: { color: f.color, width: 1.5 }, shadow: mkShadow() });
  s20.addShape(pres.shapes.RECTANGLE, { x, y: 3.7, w: 2.2, h: 0.06, fill: { color: f.color } });
  s20.addText(f.title, { x: x + 0.1, y: 3.8, w: 2.0, h: 0.25, fontSize: 10, fontFace: "Arial", bold: true, color: f.color, margin: 0 });
  s20.addText(f.desc, { x: x + 0.1, y: 4.1, w: 2.0, h: 0.7, fontSize: 8, fontFace: "Arial", color: C.textMuted, margin: 0 });
});

// ═════════════════════════════════════════════
// SLIDE 21: Design Mapping & Summary
// ═════════════════════════════════════════════
let s21 = pres.addSlide({ masterName: "CONTENT" });
s21.addText("Design Mapping Summary", { x: 0.5, y: 0.15, w: 8, h: 0.5, fontSize: 22, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
s21.addText("How Converged/Split designs map to L2/L3 topology uplink modes", { x: 0.5, y: 0.6, w: 8, h: 0.3, fontSize: 11, fontFace: "Arial", color: C.textMuted, margin: 0 });

const mappingRows = [
  [
    { text: "Network Design", options: { bold: true, color: "FFFFFF", fill: { color: C.navy }, fontSize: 11, fontFace: "Arial" } },
    { text: "Uplink Mode", options: { bold: true, color: "FFFFFF", fill: { color: C.navy }, fontSize: 11, fontFace: "Arial" } },
    { text: "Topology Sizes", options: { bold: true, color: "FFFFFF", fill: { color: C.navy }, fontSize: 11, fontFace: "Arial" } },
    { text: "Platform Support", options: { bold: true, color: "FFFFFF", fill: { color: C.navy }, fontSize: 11, fontFace: "Arial" } },
  ],
  [
    { text: "Split", options: { bold: true, fontSize: 10, fontFace: "Arial", color: C.orange } },
    { text: "Isolated", options: { fontSize: 10, fontFace: "Arial" } },
    { text: "Small · Medium · Large", options: { fontSize: 10, fontFace: "Arial" } },
    { text: "All platforms", options: { fontSize: 10, fontFace: "Arial" } },
  ],
  [
    { text: "Converged — Dual NIC", options: { bold: true, fontSize: 10, fontFace: "Arial", color: C.blue } },
    { text: "Connected", options: { fontSize: 10, fontFace: "Arial" } },
    { text: "Small · Medium · Large", options: { fontSize: 10, fontFace: "Arial" } },
    { text: "Cisco EBox only", options: { fontSize: 10, fontFace: "Arial", color: C.coral } },
  ],
  [
    { text: "Converged — Single NIC", options: { bold: true, fontSize: 10, fontFace: "Arial", color: C.teal } },
    { text: "Connected", options: { fontSize: 10, fontFace: "Arial" } },
    { text: "Small · Medium · Large", options: { fontSize: 10, fontFace: "Arial" } },
    { text: "CBox · EBox", options: { fontSize: 10, fontFace: "Arial" } },
  ],
];
s21.addTable(mappingRows, { x: 0.5, y: 1.1, w: 9.0, colW: [2.5, 1.8, 2.7, 2.0], border: { pt: 0.5, color: C.border }, rowH: [0.4, 0.45, 0.45, 0.45] });

// Key takeaways
s21.addText("Key Takeaways", { x: 0.5, y: 3.0, w: 9, h: 0.3, fontSize: 14, fontFace: "Arial", bold: true, color: C.navy, margin: 0 });
const takeaways = [
  "Split (Isolated) provides maximum traffic isolation — separate switching domains for VIP and cluster mesh",
  "Converged (Connected) reduces switch count and cabling complexity — both traffic types share VAST leaf pair",
  "SR-IOV enables Single NIC converged — PF carries cluster mesh, VF carries client VIPs with bond failover",
  "VLAN 69 provides 3 independent cluster mesh paths (PF0 direct, PF1 direct, bond) for resilience",
  "All topologies support MLAG active-active forwarding with ISL failover for high availability",
  "Production uses /18 subnets for VLAN 69 addressing — lab environments use /24 for simplicity",
];
takeaways.forEach((t, i) => {
  const y = 3.4 + i * 0.28;
  s21.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y + 0.05, w: 0.12, h: 0.12, fill: { color: C.teal } });
  s21.addText(t, { x: 0.8, y, w: 8.5, h: 0.26, fontSize: 10, fontFace: "Arial", color: C.text, margin: 0 });
});

// ═════════════════════════════════════════════
// SLIDE 22: CLOSING
// ═════════════════════════════════════════════
let s22 = pres.addSlide({ masterName: "DARK_TITLE" });
s22.addText("Thank You", { x: 0.5, y: 1.5, w: 9, h: 0.8, fontSize: 44, fontFace: "Arial", bold: true, color: C.white, margin: 0 });
s22.addText("VAST Data — Network Training", { x: 0.5, y: 2.3, w: 9, h: 0.5, fontSize: 20, fontFace: "Arial", color: C.teal, margin: 0 });
s22.addText("Node Networking  ·  Converged vs Split  ·  L2/L3 Topologies", { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 14, fontFace: "Arial", color: "7A9BBF", margin: 0 });
s22.addText("Created by Wong Tran", { x: 0.5, y: 4.0, w: 9, h: 0.3, fontSize: 14, fontFace: "Arial", italic: true, color: "7A9BBF", margin: 0 });

// ─── Write file ───
const outPath = "/Users/wongtran/Network Training/VAST_Network_Training.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("✅ Created: " + outPath);
}).catch(err => {
  console.error("❌ Error:", err);
});
