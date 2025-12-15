// Mock data for CSC Financial Tracking and Payment Management System
// No backend — all data is static in-memory JS objects/arrays.

// Students
const students = [
  { id: "2025-001", name: "Juan Dela Cruz", course: "BS Computer Science", year: "3", block: "3A" },
  { id: "2025-002", name: "Maria Santos", course: "BS Information Management", year: "1", block: "1A" },
  { id: "2025-003", name: "Carlos Reyes", course: "BS Information Management Animation", year: "2", block: "2B" },
  { id: "2025-004", name: "Diana Lopez", course: "BS Information System", year: "3", block: "3B" },
  { id: "2025-005", name: "Fernando Torres", course: "BS Computer Science", year: "4", block: "4A" },
  { id: "2025-006", name: "Elena Rodriguez", course: "BS Information Management", year: "4", block: "4B" },
];

// CSC Fee Payments (₱220 per AY)
const cscFeePayments = [
  {
    receiptId: "CSC-AY24-25-001",
    studentId: "2025-001",
    studentName: "Juan Dela Cruz",
    block: "3A",
    course: "BS Computer Science",
    academicYear: "2024-2025",
    amount: 220,
    date: "2024-12-01",
    dateSubmitted: "2024-12-01",
    status: "Verified",
    referenceNumber: "PV-1001",
    verifiedBy: "VANNESA ROSE B.",
    proofUrl: "https://via.placeholder.com/640x480?text=Proof+PV-1001",
  },
  {
    receiptId: "CSC-AY24-25-002",
    studentId: "2025-002",
    studentName: "Maria Santos",
    block: "1A",
    course: "BS Information Management",
    academicYear: "2024-2025",
    amount: 220,
    date: "2024-12-05",
    dateSubmitted: "2024-12-05",
    status: "Pending",
    referenceNumber: "PV-1002",
    verifiedBy: "",
    proofUrl: "https://via.placeholder.com/640x480?text=Proof+PV-1002",
  },
  {
    receiptId: "CSC-AY24-25-003",
    studentId: "2025-003",
    studentName: "Carlos Reyes",
    block: "2B",
    course: "BS Information Management Animation",
    academicYear: "2024-2025",
    amount: 220,
    date: "2024-12-06",
    dateSubmitted: "2024-12-06",
    status: "Pending",
    referenceNumber: "PV-1003",
    verifiedBy: "",
    proofUrl: "https://via.placeholder.com/640x480?text=Proof+PV-1003",
  },
  {
    receiptId: "CSC-AY24-25-004",
    studentId: "2025-004",
    studentName: "Diana Lopez",
    block: "3B",
    course: "BS Information System",
    academicYear: "2024-2025",
    amount: 220,
    date: "2024-12-04",
    dateSubmitted: "2024-12-04",
    status: "Verified",
    referenceNumber: "PV-1004",
    verifiedBy: "VANNESA ROSE B.",
    proofUrl: "https://via.placeholder.com/640x480?text=Proof+PV-1004",
  },
  {
    receiptId: "CSC-AY24-25-005",
    studentId: "2025-005",
    studentName: "Fernando Torres",
    block: "4A",
    course: "BS Computer Science",
    academicYear: "2024-2025",
    amount: 220,
    date: "2024-12-02",
    dateSubmitted: "2024-12-02",
    status: "Rejected",
    referenceNumber: "PV-1005",
    verifiedBy: "",
    proofUrl: "https://via.placeholder.com/640x480?text=Proof+PV-1005",
  },
  {
    receiptId: "CSC-AY24-25-006",
    studentId: "2025-006",
    studentName: "Elena Rodriguez",
    block: "4B",
    course: "BS Information Management",
    academicYear: "2024-2025",
    amount: 220,
    date: "2024-12-03",
    dateSubmitted: "2024-12-03",
    status: "Verified",
    referenceNumber: "PV-1006",
    verifiedBy: "VANNESA ROSE B.",
    proofUrl: "https://via.placeholder.com/640x480?text=Proof+PV-1006",
  },
];

// Merchandise Orders (Business Manager)
const merchandiseOrders = [
  { orderId: "M-001", studentId: "2025-001", item: "CSC T-Shirt", size: "M", amount: 300, date: "2025-01-15", status: "Paid" },
];

const peUniformOrders = [
  { orderId: "PE-001", studentId: "2025-002", item: "PE Uniform", size: "L", amount: 450, date: "2025-02-05", status: "Paid" },
];

const sealPlateRequests = [
  { requestId: "SP-001", studentId: "2025-001", item: "Seal and Plate", amount: 250, date: "2025-02-18", status: "Pending" },
];

const idLaceRequests = [
  { requestId: "ID-001", studentId: "2025-002", item: "ID Lace", amount: 50, date: "2025-02-28", status: "Paid" },
];

// Disputes
const disputes = [
  { disputeId: "D-001", studentId: "2025-001", issue: "Payment not reflected", date: "2025-02-01", status: "Resolved" },
];

// Announcement board (for landing dashboards)
const announcements = [
  { id: 1, title: "CSC PayTrack Launch", date: "Feb 10, 2025", author: "CSC ICT", description: "Welcome to CSC PayTrack! Explore the new all-in-one financial tracking experience for BU Polangui." },
  { id: 2, title: "Merchandise Pick-up", date: "Feb 14, 2025", author: "Business Manager", description: "Pre-ordered CSC jackets and ID laces will be available at the CSC booth from 9 AM to 4 PM." },
  { id: 3, title: "Financial Transparency Week", date: "Feb 20, 2025", author: "CSC Treasurer", description: "Join the transparency forum to learn about how your CSC fees are allocated for student services." },
];

// Audit trail (shared, read-only display on dashboard)
let auditTrail = [
  { timestamp: "2025-12-07 10:30:00", action: "VIEWED_DASHBOARD", details: "Accessed Treasurer Dashboard", performedBy: "VANNESA ROSE B." },
  { timestamp: "2025-12-06 15:45:00", action: "VERIFIED_PAYMENT", details: "Verified payment from Diana Lopez (₱220)", performedBy: "VANNESA ROSE B." },
  { timestamp: "2025-12-05 09:20:00", action: "VERIFIED_PAYMENT", details: "Verified payment from Elena Rodriguez (₱220)", performedBy: "VANNESA ROSE B." },
];
