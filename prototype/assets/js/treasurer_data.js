// Shared mock data for CSC Treasurer Portal (prototype only)
// Represents CSC fee records and related concerns across departments.

const treasurerCscFeeRecords = [
  // Nursing Department – BSN (4 blocks: BSN1A, BSN1B, BSN2A, BSN2B, etc.)
  { studentId: "2021-00001", studentName: "Angela Ramos", department: "Nursing Department", course: "BSN", academicYear: "2020-2021", yearLevel: "1st Year", block: "BSN1A", amount: 220, receiptNo: "RCPT-N-1001", date: "2021-01-15", status: "Verified" },
  { studentId: "2021-00002", studentName: "Beatrice Mendoza", department: "Nursing Department", course: "BSN", academicYear: "2020-2021", yearLevel: "1st Year", block: "BSN1B", amount: 220, receiptNo: "RCPT-N-1002", date: "2021-01-16", status: "Verified" },
  { studentId: "2020-00015", studentName: "Clarence Uy", department: "Nursing Department", course: "BSN", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSN2A", amount: 220, receiptNo: "RCPT-N-1045", date: "2022-01-10", status: "Verified" },
  { studentId: "2020-00016", studentName: "Diana Fernandez", department: "Nursing Department", course: "BSN", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSN2B", amount: 220, receiptNo: "RCPT-N-1046", date: "2022-01-11", status: "Verified" },
  { studentId: "2019-00020", studentName: "Eduardo Torres", department: "Nursing Department", course: "BSN", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BSN3A", amount: 220, receiptNo: "RCPT-N-2050", date: "2023-01-12", status: "Verified" },
  { studentId: "2019-00021", studentName: "Fatima Garcia", department: "Nursing Department", course: "BSN", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BSN3B", amount: 220, receiptNo: "RCPT-N-2051", date: "2023-01-13", status: "Verified" },
  { studentId: "2018-00030", studentName: "Gabriel Lopez", department: "Nursing Department", course: "BSN", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSN4A", amount: 220, receiptNo: "RCPT-N-3060", date: "2024-01-14", status: "Verified" },
  { studentId: "2018-00031", studentName: "Hannah Rivera", department: "Nursing Department", course: "BSN", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSN4B", amount: 220, receiptNo: "RCPT-N-3061", date: "2024-01-15", status: "Pending Verification" },
  { studentId: "2022-00040", studentName: "Ivan Martinez", department: "Nursing Department", course: "BSN", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSN1A", amount: 220, receiptNo: "RCPT-N-4070", date: "2025-01-10", status: "Pending Verification" },
  { studentId: "2022-00041", studentName: "Jasmine Cruz", department: "Nursing Department", course: "BSN", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSN1B", amount: 220, receiptNo: "RCPT-N-4071", date: "2025-01-11", status: "Pending Verification" },

  // Computer Studies – BSIT (2 blocks: BSIT1A, BSIT1B, etc.)
  { studentId: "2022-01001", studentName: "Juan Dela Cruz", department: "Computer Studies Department", course: "BSIT", academicYear: "2023-2024", yearLevel: "2nd Year", block: "BSIT2A", amount: 220, receiptNo: "RCPT-CS-2001", date: "2024-01-20", status: "Verified" },
  { studentId: "2022-01002", studentName: "Maria Santos", department: "Computer Studies Department", course: "BSIT", academicYear: "2024-2025", yearLevel: "3rd Year", block: "BSIT3B", amount: 220, receiptNo: "RCPT-CS-2105", date: "2025-01-12", status: "Pending Verification" },
  { studentId: "2022-01003", studentName: "Karl Villanueva", department: "Computer Studies Department", course: "BSIT", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSIT1A", amount: 220, receiptNo: "RCPT-CS-2003", date: "2023-01-08", status: "Verified" },
  { studentId: "2022-01004", studentName: "Liza Morales", department: "Computer Studies Department", course: "BSIT", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSIT1B", amount: 220, receiptNo: "RCPT-CS-2004", date: "2023-01-09", status: "Verified" },
  { studentId: "2021-01010", studentName: "Michael Ocampo", department: "Computer Studies Department", course: "BSIT", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSIT2B", amount: 220, receiptNo: "RCPT-CS-2010", date: "2022-01-15", status: "Verified" },
  { studentId: "2020-01020", studentName: "Nina Reyes", department: "Computer Studies Department", course: "BSIT", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSIT4A", amount: 220, receiptNo: "RCPT-CS-3020", date: "2024-01-18", status: "Verified" },
  { studentId: "2020-01021", studentName: "Oscar Dizon", department: "Computer Studies Department", course: "BSIT", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSIT4B", amount: 220, receiptNo: "RCPT-CS-3021", date: "2024-01-19", status: "Pending Verification" },
  { studentId: "2023-01030", studentName: "Patricia Alcantara", department: "Computer Studies Department", course: "BSIT", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSIT1A", amount: 220, receiptNo: "RCPT-CS-4030", date: "2025-01-08", status: "Pending Verification" },

  // Computer Studies – BSIS (2 blocks: BSIS1A, BSIS1B, etc.)
  { studentId: "2022-02011", studentName: "Patrick Cruz", department: "Computer Studies Department", course: "BSIS", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSIS1A", amount: 220, receiptNo: "RCPT-CS-3001", date: "2023-01-05", status: "Verified" },
  { studentId: "2022-02012", studentName: "Quincy Lim", department: "Computer Studies Department", course: "BSIS", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSIS1B", amount: 220, receiptNo: "RCPT-CS-3002", date: "2023-01-06", status: "Verified" },
  { studentId: "2021-02020", studentName: "Rafael Santos", department: "Computer Studies Department", course: "BSIS", academicYear: "2023-2024", yearLevel: "2nd Year", block: "BSIS2A", amount: 220, receiptNo: "RCPT-CS-3020", date: "2024-01-10", status: "Verified" },
  { studentId: "2021-02021", studentName: "Sofia Tan", department: "Computer Studies Department", course: "BSIS", academicYear: "2023-2024", yearLevel: "2nd Year", block: "BSIS2B", amount: 220, receiptNo: "RCPT-CS-3021", date: "2024-01-11", status: "Verified" },
  { studentId: "2022-02018", studentName: "Joanna Lim", department: "Computer Studies Department", course: "BSIS", academicYear: "2024-2025", yearLevel: "3rd Year", block: "BSIS3B", amount: 220, receiptNo: "RCPT-CS-3019", date: "2025-01-18", status: "Pending Verification" },
  { studentId: "2020-02030", studentName: "Tomas Villanueva", department: "Computer Studies Department", course: "BSIS", academicYear: "2024-2025", yearLevel: "4th Year", block: "BSIS4A", amount: 220, receiptNo: "RCPT-CS-3030", date: "2025-01-20", status: "Pending Verification" },

  // Computer Studies – BSCS (3 blocks: BSCS1A, BSCS1B, BSCS1C, etc.)
  { studentId: "2021-03005", studentName: "Kevin Tan", department: "Computer Studies Department", course: "BSCS", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSCS2A", amount: 220, receiptNo: "RCPT-CS-4003", date: "2022-01-18", status: "Verified" },
  { studentId: "2021-03006", studentName: "Lara Santos", department: "Computer Studies Department", course: "BSCS", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSCS2B", amount: 220, receiptNo: "RCPT-CS-4004", date: "2022-01-19", status: "Verified" },
  { studentId: "2021-03007", studentName: "Miguel Cruz", department: "Computer Studies Department", course: "BSCS", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSCS2C", amount: 220, receiptNo: "RCPT-CS-4005", date: "2022-01-20", status: "Verified" },
  { studentId: "2020-03015", studentName: "Natalie Reyes", department: "Computer Studies Department", course: "BSCS", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BSCS3A", amount: 220, receiptNo: "RCPT-CS-4015", date: "2023-01-22", status: "Verified" },
  { studentId: "2020-03016", studentName: "Oliver Mendoza", department: "Computer Studies Department", course: "BSCS", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BSCS3B", amount: 220, receiptNo: "RCPT-CS-4016", date: "2023-01-23", status: "Verified" },
  { studentId: "2021-03022", studentName: "Paula Fernandez", department: "Computer Studies Department", course: "BSCS", academicYear: "2023-2024", yearLevel: "3rd Year", block: "BSCS3C", amount: 220, receiptNo: "RCPT-CS-4030", date: "2024-01-25", status: "Verified" },
  { studentId: "2019-03025", studentName: "Ramon Garcia", department: "Computer Studies Department", course: "BSCS", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSCS4A", amount: 220, receiptNo: "RCPT-CS-4025", date: "2024-01-26", status: "Verified" },
  { studentId: "2019-03026", studentName: "Sarah Lopez", department: "Computer Studies Department", course: "BSCS", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSCS4B", amount: 220, receiptNo: "RCPT-CS-4026", date: "2024-01-27", status: "Pending Verification" },
  { studentId: "2022-03035", studentName: "Tristan Rivera", department: "Computer Studies Department", course: "BSCS", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSCS1A", amount: 220, receiptNo: "RCPT-CS-4035", date: "2025-01-09", status: "Pending Verification" },

  // Computer Studies – BSIT Animation (1 block)
  { studentId: "2023-04001", studentName: "Rico Villanueva", department: "Computer Studies Department", course: "BSIT Animation", academicYear: "2024-2025", yearLevel: "2nd Year", block: "BSIT-ANIM2A", amount: 220, receiptNo: "RCPT-CS-5005", date: "2025-01-09", status: "Verified" },
  { studentId: "2023-04002", studentName: "Uma Martinez", department: "Computer Studies Department", course: "BSIT Animation", academicYear: "2023-2024", yearLevel: "1st Year", block: "BSIT-ANIM1A", amount: 220, receiptNo: "RCPT-CS-5006", date: "2024-01-07", status: "Verified" },
  { studentId: "2022-04010", studentName: "Victor Ocampo", department: "Computer Studies Department", course: "BSIT Animation", academicYear: "2024-2025", yearLevel: "3rd Year", block: "BSIT-ANIM3A", amount: 220, receiptNo: "RCPT-CS-5010", date: "2025-01-10", status: "Pending Verification" },

  // Entrepreneurship Department – BSEntrep (4 blocks: BSEntrep1A, BSEntrep1B, BSEntrep1C, BSEntrep1D, etc.)
  { studentId: "2020-05002", studentName: "Mika Dela Rosa", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2020-2021", yearLevel: "1st Year", block: "BSEntrep1A", amount: 220, receiptNo: "RCPT-ENT-1002", date: "2021-01-08", status: "Verified" },
  { studentId: "2020-05003", studentName: "Wendy Alcantara", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2020-2021", yearLevel: "1st Year", block: "BSEntrep1B", amount: 220, receiptNo: "RCPT-ENT-1003", date: "2021-01-09", status: "Verified" },
  { studentId: "2020-05004", studentName: "Xavier Dizon", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2020-2021", yearLevel: "1st Year", block: "BSEntrep1C", amount: 220, receiptNo: "RCPT-ENT-1004", date: "2021-01-10", status: "Verified" },
  { studentId: "2020-05005", studentName: "Yvonne Cruz", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2020-2021", yearLevel: "1st Year", block: "BSEntrep1D", amount: 220, receiptNo: "RCPT-ENT-1005", date: "2021-01-11", status: "Verified" },
  { studentId: "2019-05015", studentName: "Zachary Lim", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSEntrep2A", amount: 220, receiptNo: "RCPT-ENT-1015", date: "2022-01-12", status: "Verified" },
  { studentId: "2019-05016", studentName: "Alyssa Tan", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSEntrep2B", amount: 220, receiptNo: "RCPT-ENT-1016", date: "2022-01-13", status: "Verified" },
  { studentId: "2020-05018", studentName: "Alvin Go", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSEntrep4C", amount: 220, receiptNo: "RCPT-ENT-1019", date: "2024-01-11", status: "Pending Verification" },
  { studentId: "2018-05025", studentName: "Bianca Santos", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSEntrep4D", amount: 220, receiptNo: "RCPT-ENT-1025", date: "2024-01-14", status: "Pending Verification" },
  { studentId: "2021-05030", studentName: "Carlos Villanueva", department: "Entrepreneurship Department", course: "BSEntrep", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSEntrep1A", amount: 220, receiptNo: "RCPT-ENT-1030", date: "2025-01-08", status: "Pending Verification" },

  // Engineering Department – BSCpE (2 blocks: BSCpE1A, BSCpE1B, etc.)
  { studentId: "2021-06010", studentName: "Joshua Lee", department: "Engineering Department", course: "BSCpE", academicYear: "2022-2023", yearLevel: "2nd Year", block: "BSCpE2A", amount: 220, receiptNo: "RCPT-ENG-2003", date: "2023-01-16", status: "Verified" },
  { studentId: "2021-06011", studentName: "Karen Dy", department: "Engineering Department", course: "BSCpE", academicYear: "2022-2023", yearLevel: "2nd Year", block: "BSCpE2B", amount: 220, receiptNo: "RCPT-ENG-2004", date: "2023-01-17", status: "Verified" },
  { studentId: "2020-06020", studentName: "Liam Garcia", department: "Engineering Department", course: "BSCpE", academicYear: "2023-2024", yearLevel: "3rd Year", block: "BSCpE3A", amount: 220, receiptNo: "RCPT-ENG-2020", date: "2024-01-18", status: "Verified" },
  { studentId: "2020-06021", studentName: "Maya Fernandez", department: "Engineering Department", course: "BSCpE", academicYear: "2023-2024", yearLevel: "3rd Year", block: "BSCpE3B", amount: 220, receiptNo: "RCPT-ENG-2021", date: "2024-01-19", status: "Verified" },
  { studentId: "2019-06030", studentName: "Noah Reyes", department: "Engineering Department", course: "BSCpE", academicYear: "2024-2025", yearLevel: "4th Year", block: "BSCpE4A", amount: 220, receiptNo: "RCPT-ENG-2030", date: "2025-01-15", status: "Pending Verification" },
  { studentId: "2022-06040", studentName: "Olivia Cruz", department: "Engineering Department", course: "BSCpE", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSCpE1A", amount: 220, receiptNo: "RCPT-ENG-2040", date: "2025-01-16", status: "Pending Verification" },

  // Engineering Department – BSECE (2 blocks: BSECE1A, BSECE1B, etc.)
  { studentId: "2021-06025", studentName: "Pablo Martinez", department: "Engineering Department", course: "BSECE", academicYear: "2024-2025", yearLevel: "4th Year", block: "BSECE4B", amount: 220, receiptNo: "RCPT-ENG-2022", date: "2025-01-14", status: "Pending Verification" },
  { studentId: "2021-06026", studentName: "Quinn Lopez", department: "Engineering Department", course: "BSECE", academicYear: "2022-2023", yearLevel: "2nd Year", block: "BSECE2A", amount: 220, receiptNo: "RCPT-ENG-2026", date: "2023-01-20", status: "Verified" },
  { studentId: "2021-06027", studentName: "Rachel Torres", department: "Engineering Department", course: "BSECE", academicYear: "2022-2023", yearLevel: "2nd Year", block: "BSECE2B", amount: 220, receiptNo: "RCPT-ENG-2027", date: "2023-01-21", status: "Verified" },
  { studentId: "2020-06035", studentName: "Samuel Rivera", department: "Engineering Department", course: "BSECE", academicYear: "2023-2024", yearLevel: "3rd Year", block: "BSECE3A", amount: 220, receiptNo: "RCPT-ENG-2035", date: "2024-01-22", status: "Verified" },
  { studentId: "2020-06036", studentName: "Tina Mendoza", department: "Engineering Department", course: "BSECE", academicYear: "2023-2024", yearLevel: "3rd Year", block: "BSECE3B", amount: 220, receiptNo: "RCPT-ENG-2036", date: "2024-01-23", status: "Verified" },
  { studentId: "2022-06045", studentName: "Ulysses Villanueva", department: "Engineering Department", course: "BSECE", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSECE1A", amount: 220, receiptNo: "RCPT-ENG-2045", date: "2025-01-17", status: "Pending Verification" },

  // Teacher Education Department – BEEd (2 blocks: BEEd1A, BEEd1B, etc.)
  { studentId: "2020-07003", studentName: "Roselyn Fabella", department: "Teacher Education Department", course: "BEEd", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BEEd2A", amount: 220, receiptNo: "RCPT-TED-3004", date: "2022-01-09", status: "Verified" },
  { studentId: "2020-07004", studentName: "Vanessa Ocampo", department: "Teacher Education Department", course: "BEEd", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BEEd2B", amount: 220, receiptNo: "RCPT-TED-3005", date: "2022-01-10", status: "Verified" },
  { studentId: "2019-07015", studentName: "William Alcantara", department: "Teacher Education Department", course: "BEEd", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BEEd3A", amount: 220, receiptNo: "RCPT-TED-3015", date: "2023-01-11", status: "Verified" },
  { studentId: "2019-07016", studentName: "Xara Dizon", department: "Teacher Education Department", course: "BEEd", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BEEd3B", amount: 220, receiptNo: "RCPT-TED-3016", date: "2023-01-12", status: "Verified" },
  { studentId: "2018-07025", studentName: "Yuki Tan", department: "Teacher Education Department", course: "BEEd", academicYear: "2023-2024", yearLevel: "4th Year", block: "BEEd4A", amount: 220, receiptNo: "RCPT-TED-3025", date: "2024-01-13", status: "Verified" },
  { studentId: "2021-07030", studentName: "Zara Cruz", department: "Teacher Education Department", course: "BEEd", academicYear: "2024-2025", yearLevel: "1st Year", block: "BEEd1A", amount: 220, receiptNo: "RCPT-TED-3030", date: "2025-01-09", status: "Pending Verification" },

  // Teacher Education Department – BSEd (2 blocks: BSEd1A, BSEd1B, etc.)
  { studentId: "2020-07019", studentName: "Mark dela Cruz", department: "Teacher Education Department", course: "BSEd", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSEd4B", amount: 220, receiptNo: "RCPT-TED-3019", date: "2024-01-19", status: "Verified" },
  { studentId: "2020-07020", studentName: "Anna Garcia", department: "Teacher Education Department", course: "BSEd", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSEd2A", amount: 220, receiptNo: "RCPT-TED-3020", date: "2022-01-14", status: "Verified" },
  { studentId: "2020-07021", studentName: "Ben Santos", department: "Teacher Education Department", course: "BSEd", academicYear: "2021-2022", yearLevel: "2nd Year", block: "BSEd2B", amount: 220, receiptNo: "RCPT-TED-3021", date: "2022-01-15", status: "Verified" },
  { studentId: "2019-07030", studentName: "Carla Lim", department: "Teacher Education Department", course: "BSEd", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BSEd3A", amount: 220, receiptNo: "RCPT-TED-3030", date: "2023-01-16", status: "Verified" },
  { studentId: "2019-07031", studentName: "David Reyes", department: "Teacher Education Department", course: "BSEd", academicYear: "2022-2023", yearLevel: "3rd Year", block: "BSEd3B", amount: 220, receiptNo: "RCPT-TED-3031", date: "2023-01-17", status: "Verified" },
  { studentId: "2018-07040", studentName: "Elena Fernandez", department: "Teacher Education Department", course: "BSEd", academicYear: "2023-2024", yearLevel: "4th Year", block: "BSEd4A", amount: 220, receiptNo: "RCPT-TED-3040", date: "2024-01-20", status: "Verified" },
  { studentId: "2021-07045", studentName: "Frank Martinez", department: "Teacher Education Department", course: "BSEd", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSEd1A", amount: 220, receiptNo: "RCPT-TED-3045", date: "2025-01-10", status: "Pending Verification" },

  // Technology Department – BSAutoTech (2 blocks: BSAutoTech1A, BSAutoTech1B, etc.)
  { studentId: "2022-08001", studentName: "James Herrera", department: "Technology Department", course: "BSAutoTech", academicYear: "2023-2024", yearLevel: "2nd Year", block: "BSAutoTech2A", amount: 220, receiptNo: "RCPT-TECH-4001", date: "2024-01-07", status: "Verified" },
  { studentId: "2022-08002", studentName: "Grace Lopez", department: "Technology Department", course: "BSAutoTech", academicYear: "2023-2024", yearLevel: "2nd Year", block: "BSAutoTech2B", amount: 220, receiptNo: "RCPT-TECH-4002", date: "2024-01-08", status: "Verified" },
  { studentId: "2021-08010", studentName: "Henry Torres", department: "Technology Department", course: "BSAutoTech", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSAutoTech1A", amount: 220, receiptNo: "RCPT-TECH-4010", date: "2023-01-09", status: "Verified" },
  { studentId: "2021-08011", studentName: "Isabel Rivera", department: "Technology Department", course: "BSAutoTech", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSAutoTech1B", amount: 220, receiptNo: "RCPT-TECH-4011", date: "2023-01-10", status: "Verified" },
  { studentId: "2020-08020", studentName: "Jack Mendoza", department: "Technology Department", course: "BSAutoTech", academicYear: "2023-2024", yearLevel: "3rd Year", block: "BSAutoTech3A", amount: 220, receiptNo: "RCPT-TECH-4020", date: "2024-01-11", status: "Verified" },
  { studentId: "2019-08030", studentName: "Kelly Garcia", department: "Technology Department", course: "BSAutoTech", academicYear: "2024-2025", yearLevel: "4th Year", block: "BSAutoTech4A", amount: 220, receiptNo: "RCPT-TECH-4030", date: "2025-01-12", status: "Pending Verification" },
  { studentId: "2023-08040", studentName: "Leo Cruz", department: "Technology Department", course: "BSAutoTech", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSAutoTech1A", amount: 220, receiptNo: "RCPT-TECH-4040", date: "2025-01-13", status: "Pending Verification" },

  // Technology Department – BSElecTech (2 blocks: BSElecTech1A, BSElecTech1B, etc.)
  { studentId: "2022-08012", studentName: "Nicole Cruz", department: "Technology Department", course: "BSElecTech", academicYear: "2024-2025", yearLevel: "3rd Year", block: "BSElecTech3B", amount: 220, receiptNo: "RCPT-TECH-4012", date: "2025-01-13", status: "Pending Verification" },
  { studentId: "2022-08013", studentName: "Omar Santos", department: "Technology Department", course: "BSElecTech", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSElecTech1A", amount: 220, receiptNo: "RCPT-TECH-4013", date: "2023-01-11", status: "Verified" },
  { studentId: "2022-08014", studentName: "Paula Tan", department: "Technology Department", course: "BSElecTech", academicYear: "2022-2023", yearLevel: "1st Year", block: "BSElecTech1B", amount: 220, receiptNo: "RCPT-TECH-4014", date: "2023-01-12", status: "Verified" },
  { studentId: "2021-08025", studentName: "Quinn Villanueva", department: "Technology Department", course: "BSElecTech", academicYear: "2023-2024", yearLevel: "2nd Year", block: "BSElecTech2A", amount: 220, receiptNo: "RCPT-TECH-4025", date: "2024-01-14", status: "Verified" },
  { studentId: "2021-08026", studentName: "Rosa Alcantara", department: "Technology Department", course: "BSElecTech", academicYear: "2023-2024", yearLevel: "2nd Year", block: "BSElecTech2B", amount: 220, receiptNo: "RCPT-TECH-4026", date: "2024-01-15", status: "Verified" },
  { studentId: "2020-08035", studentName: "Simon Dizon", department: "Technology Department", course: "BSElecTech", academicYear: "2023-2024", yearLevel: "3rd Year", block: "BSElecTech3A", amount: 220, receiptNo: "RCPT-TECH-4035", date: "2024-01-16", status: "Verified" },
  { studentId: "2019-08045", studentName: "Teresa Lim", department: "Technology Department", course: "BSElecTech", academicYear: "2024-2025", yearLevel: "4th Year", block: "BSElecTech4A", amount: 220, receiptNo: "RCPT-TECH-4045", date: "2025-01-14", status: "Pending Verification" },
  { studentId: "2023-08050", studentName: "Uriel Martinez", department: "Technology Department", course: "BSElecTech", academicYear: "2024-2025", yearLevel: "1st Year", block: "BSElecTech1A", amount: 220, receiptNo: "RCPT-TECH-4050", date: "2025-01-15", status: "Pending Verification" }
];

// Sample CSC Fee concerns linked to some of the above records
const treasurerConcerns = [
  {
    id: "C-2025-001",
    studentId: "2022-01002",
    studentName: "Maria Santos",
    academicYear: "2024-2025",
    course: "BSIT",
    block: "BSIT3B",
    issue: "CSC fee already paid but portal still shows Payment Pending.",
    proof: ["or_bsitt3b_maria.jpg"],
    date: "2025-01-20",
    otherDetails: "Receipt No. RCPT-CS-2105 · Amount ₱220.00",
    status: "Pending Verification",
  },
  {
    id: "C-2025-002",
    studentId: "2020-05018",
    studentName: "Alvin Go",
    academicYear: "2023-2024",
    course: "BSEntrep",
    block: "BSEntrep4C",
    issue: "CSC fee posted twice for the same academic year.",
    proof: ["duplicate_entry_screenshot.png"],
    date: "2024-12-10",
    otherDetails: "Receipt No. RCPT-ENT-1019 · Duplicate transaction",
    status: "Under Review",
  },
  {
    id: "C-2025-003",
    studentId: "2018-00031",
    studentName: "Hannah Rivera",
    academicYear: "2023-2024",
    course: "BSN",
    block: "BSN4B",
    issue: "Payment submitted but status remains as Pending Verification for over a week.",
    proof: ["bsn4b_receipt_scan.jpg"],
    date: "2025-01-19",
    otherDetails: "Receipt No. RCPT-N-3061 · Submitted on 2024-01-15",
    status: "Pending Verification",
  },
  {
    id: "C-2025-004",
    studentId: "2022-01003",
    studentName: "Karl Villanueva",
    academicYear: "2022-2023",
    course: "BSIT",
    block: "BSIT1A",
    issue: "Incorrect block assignment - should be BSIT1B not BSIT1A.",
    proof: ["bsit1b_enrollment_form.pdf"],
    date: "2025-01-18",
    otherDetails: "Receipt No. RCPT-CS-2003 · Block correction needed",
    status: "Under Review",
  },
  {
    id: "C-2025-005",
    studentId: "2021-03022",
    studentName: "Paula Fernandez",
    academicYear: "2023-2024",
    course: "BSCS",
    block: "BSCS3C",
    issue: "CSC fee payment not reflected in student portal after verification.",
    proof: ["bscs3c_payment_slip.jpg"],
    date: "2025-01-17",
    otherDetails: "Receipt No. RCPT-CS-4030 · Verified on 2024-01-25",
    status: "Under Review",
  },
  {
    id: "C-2024-015",
    studentId: "2021-06010",
    studentName: "Joshua Lee",
    academicYear: "2022-2023",
    course: "BSCpE",
    block: "BSCpE2A",
    issue: "Incorrect AY encoded for my CSC fee payment.",
    proof: ["csc_or_bscpe2a.jpg"],
    date: "2023-02-05",
    otherDetails: "Receipt No. RCPT-ENG-2003 · Should be 2022-2023",
    status: "Resolved",
  },
  {
    id: "C-2023-008",
    studentId: "2020-07003",
    studentName: "Roselyn Fabella",
    academicYear: "2021-2022",
    course: "BEEd",
    block: "BEEd2A",
    issue: "Payment not reflected after block treasurer remittance.",
    proof: ["beed2a_treasurer_summary.pdf"],
    date: "2022-02-18",
    otherDetails: "Receipt No. RCPT-TED-3004 · Verified by CSC Treasurer.",
    status: "Resolved",
  },
  {
    id: "C-2024-020",
    studentId: "2020-01020",
    studentName: "Nina Reyes",
    academicYear: "2023-2024",
    course: "BSIT",
    block: "BSIT4A",
    issue: "CSC fee payment verified but concern still shows as unresolved.",
    proof: ["bsit4a_verification_email.pdf"],
    date: "2024-02-10",
    otherDetails: "Receipt No. RCPT-CS-3020 · Resolved by treasurer",
    status: "Resolved",
  },
  {
    id: "C-2025-010",
    studentId: "2022-08012",
    studentName: "Nicole Cruz",
    academicYear: "2024-2025",
    course: "BSElecTech",
    block: "BSElecTech3B",
    issue: "Amount encoded as ₱200.00 instead of ₱220.00.",
    proof: ["bselectech3b_or.jpg"],
    date: "2025-01-18",
    otherDetails: "Receipt No. RCPT-TECH-4012 · Needs correction.",
    status: "Pending Verification",
  },
  {
    id: "C-2025-011",
    studentId: "2021-03026",
    studentName: "Sarah Lopez",
    academicYear: "2023-2024",
    course: "BSCS",
    block: "BSCS4B",
    issue: "Receipt number mismatch - submitted RCPT-CS-4026 but system shows different number.",
    proof: ["bscs4b_original_receipt.jpg"],
    date: "2025-01-16",
    otherDetails: "Receipt No. RCPT-CS-4026 · Date: 2024-01-27",
    status: "Under Review",
  },
  {
    id: "C-2024-025",
    studentId: "2019-05016",
    studentName: "Alyssa Tan",
    academicYear: "2021-2022",
    course: "BSEntrep",
    block: "BSEntrep2B",
    issue: "CSC fee payment processed but student portal shows unpaid status.",
    proof: ["bentrep2b_payment_confirmation.pdf"],
    date: "2024-03-15",
    otherDetails: "Receipt No. RCPT-ENT-1016 · Resolved",
    status: "Resolved",
  },
  {
    id: "C-2025-012",
    studentId: "2020-06021",
    studentName: "Maya Fernandez",
    academicYear: "2023-2024",
    course: "BSCpE",
    block: "BSCpE3B",
    issue: "Duplicate payment entry for the same academic year.",
    proof: ["bscpe3b_duplicate_screenshot.png"],
    date: "2025-01-15",
    otherDetails: "Receipt No. RCPT-ENG-2021 · Needs review",
    status: "Rejected",
  }
];

// Simple helpers that can be reused on multiple pages
function treasurerGetDistinctDepartments() {
  return Array.from(new Set(treasurerCscFeeRecords.map((r) => r.department))).sort();
}

function treasurerGetDistinctCourses(departmentFilter) {
  return Array.from(
    new Set(
      treasurerCscFeeRecords
        .filter((r) => !departmentFilter || r.department === departmentFilter)
        .map((r) => r.course),
    ),
  ).sort();
}

function treasurerGetDistinctBlocks(courseFilter) {
  return Array.from(
    new Set(
      treasurerCscFeeRecords
        .filter((r) => !courseFilter || r.course === courseFilter)
        .map((r) => r.block),
    ),
  ).sort();
}

function treasurerAggregateCollectionsByAy() {
  const map = {};
  treasurerCscFeeRecords.forEach((r) => {
    if (r.status !== "Verified") return;
    map[r.academicYear] = (map[r.academicYear] || 0) + (Number(r.amount) || 0);
  });
  return map;
}

function treasurerAggregateConcernsByAyAndStatus() {
  const map = {};
  treasurerConcerns.forEach((c) => {
    const ay = c.academicYear || "Unknown";
    if (!map[ay]) map[ay] = { Pending: 0, "Pending Verification": 0, "Under Review": 0, Resolved: 0, Rejected: 0 };
    if (map[ay][c.status] !== undefined) {
      map[ay][c.status] += 1;
    }
  });
  return map;
}

// Sample audit log entries for CSC Fee page
function getCscFeeAuditLogs() {
  return [
    { time: "2025-12-16 10:30:12", action: "Verified CSC Fee payment for Juan Dela Cruz (RCPT-CS-2001)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-16 09:15:44", action: "Filtered CSC Fee records by Computer Studies Department, BSIT, BSIT3B", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-15 16:02:03", action: "Rejected duplicate CSC Fee payment for Alvin Go (RCPT-ENT-1019)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-15 14:20:18", action: "Verified CSC Fee payment for Angela Ramos (RCPT-N-1001)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-15 11:45:30", action: "Verified CSC Fee payment for Patrick Cruz (RCPT-CS-3001)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-14 15:30:22", action: "Filtered CSC Fee records by Nursing Department, BSN, All Blocks", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-14 13:10:45", action: "Verified CSC Fee payment for Kevin Tan (RCPT-CS-4003)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-14 10:25:12", action: "Verified CSC Fee payment for Mika Dela Rosa (RCPT-ENT-1002)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-13 16:50:33", action: "Verified CSC Fee payment for Joshua Lee (RCPT-ENG-2003)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-13 14:15:20", action: "Filtered CSC Fee records by Status: Pending Verification", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-13 11:30:55", action: "Verified CSC Fee payment for Roselyn Fabella (RCPT-TED-3004)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-12 15:45:10", action: "Verified CSC Fee payment for James Herrera (RCPT-TECH-4001)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-12 13:20:40", action: "Downloaded CSC Fee Records PDF report", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-12 10:05:18", action: "Verified CSC Fee payment for Rico Villanueva (RCPT-CS-5005)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-11 16:30:25", action: "Filtered CSC Fee records by Engineering Department, BSCpE, BSCpE2A", user: "BU Polangui CSC Treasurer" }
  ];
}

// Sample audit log entries for Concerns page
function getConcernsAuditLogs() {
  return [
    { time: "2025-12-16 11:20:15", action: "Resolved concern C-2024-015 for Joshua Lee (BSCpE2A)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-16 09:45:30", action: "Marked concern C-2025-002 as Under Review for Alvin Go", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-15 15:10:22", action: "Resolved concern C-2023-008 for Roselyn Fabella (BEEd2A)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-15 13:30:45", action: "Rejected concern C-2025-012 for Maya Fernandez (BSCpE3B)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-14 16:20:10", action: "Resolved concern C-2024-020 for Nina Reyes (BSIT4A)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-14 14:05:33", action: "Marked concern C-2025-005 as Under Review for Paula Fernandez", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-13 17:15:50", action: "Resolved concern C-2024-025 for Alyssa Tan (BSEntrep2B)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-13 11:40:18", action: "Reviewed concern C-2025-001 for Maria Santos (BSIT3B)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-12 15:25:42", action: "Marked concern C-2025-004 as Under Review for Karl Villanueva", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-12 10:50:27", action: "Downloaded Concerns Records PDF report", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-11 16:45:15", action: "Reviewed concern C-2025-011 for Sarah Lopez (BSCS4B)", user: "BU Polangui CSC Treasurer" },
    { time: "2025-12-11 13:10:30", action: "Downloaded Audit Logs PDF report", user: "BU Polangui CSC Treasurer" }
  ];
}
