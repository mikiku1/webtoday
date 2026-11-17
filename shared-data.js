// ============================================================================
// ข้อมูลตัวอย่างเริ่มต้น (Demo Catalog Items & Multi-Image Articles)
// ใช้แสดงผลทันทีเพื่อสาธิตระบบสเปค (spec.html) และระบบบทความสไลด์ภาพอัตโนมัติ (Netflix-style)
// ============================================================================

export const SITE_CONFIG_TAG = '__SITE_CONFIG__';
export const POST_ITEM_TAG = '__POST__';

export const DEMO_CATALOG_ITEMS = [
  {
    id: 'demo-spec-1',
    title: 'TD-ARM X7 INDUSTRIAL ROBOTICS SYSTEM',
    price_or_tag: 'AI & AUTOMATION',
    image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    created_at: '2026-11-15T09:30:00+07:00',
    description: JSON.stringify({
      summary: 'แขนกลอุตสาหกรรมความแม่นยำสูง 6 แกนหมุน พร้อมระบบประมวลผล Machine Vision แบบเรียลไทม์สำหรับสายการผลิตอัจฉริยะ',
      specs: [
        'รุ่น (Model): TD-ARM X7 Pro Series',
        'จำนวนแกนเคลื่อนที่ (Axes): 6-Axis Articulated Robot',
        'น้ำหนักบรรทุกสูงสุด (Payload): 25 กิโลกรัม (kg)',
        'ระยะเอื้อมสูงสุด (Max Reach): 1,850 มิลลิเมตร (mm)',
        'ความแม่นยำซ้ำ (Repeatability): ±0.02 มิลลิเมตร',
        'ระบบประมวลผล (Controller): TD-Edge AI Core พร้อม 3D Vision Sensor',
        'การเชื่อมต่อ (Connectivity): Industrial Ethernet, OPC-UA, Modbus TCP, 5G Ready',
        'มาตรฐานการป้องกัน (IP Rating): IP67 กันฝุ่นและของเหลวระดับอุตสาหกรรม',
        'ระบบจ่ายไฟ (Power Supply): 380V AC 3-Phase, 50/60Hz (ประหยัดพลังงาน 28%)'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'
      ]
    })
  },
  {
    id: 'demo-spec-2',
    title: 'TD-CORE NEXUS EDGE SERVER & AI GATEWAY',
    price_or_tag: 'INTELLIGENT PRODUCTS',
    image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    created_at: '2026-11-12T14:15:00+07:00',
    description: JSON.stringify({
      summary: 'เซิร์ฟเวอร์ประมวลผลระดับ Edge สำหรับองค์กรและโรงงานอุตสาหกรรม รองรับการรันโมเดล AI และวิเคราะห์ข้อมูลเซ็นเซอร์ความเร็วสูงแบบไร้ความหน่วง',
      specs: [
        'รุ่น (Model): TD-CORE Nexus E400',
        'หน่วยประมวลผล (Processor): Dual 32-Core Enterprise Server CPU + Neural NPU 275 TOPS',
        'หน่วยความจำ (Memory): 256 GB DDR5 ECC Registered',
        'พื้นที่จัดเก็บข้อมูล (Storage): 4x 4TB NVMe PCIe Gen5 Enterprise SSD (RAID 0/1/5/10)',
        'พอร์ตเครือข่าย (Networking): 4x 25GbE SFP28 + 2x 10GbE RJ45',
        'ระบบทำความเย็น (Cooling): Smart Vapor Chamber & Redundant Hot-Swap Fans',
        'ความปลอดภัย (Security): Hardware TPM 2.0, AES-256 Real-time Encryption, Supabase RLS Sync',
        'อุณหภูมิการทำงาน (Operating Temp): -20°C ถึง 65°C สำหรับสภาพแวดล้อมสมบุกสมบัน'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85'
      ]
    })
  },
  {
    id: 'demo-spec-3',
    title: 'TD-GRID SMART ENERGY & TELEMETRY PLATFORM',
    price_or_tag: 'INDUSTRY SOLUTIONS',
    image_url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
    created_at: '2026-11-10T11:00:00+07:00',
    description: JSON.stringify({
      summary: 'แพลตฟอร์มบริหารจัดการพลังงานอัจฉริยะและมอนิเตอร์สถานะเครื่องจักรแบบเรียลไทม์ผ่านคลาวด์ ลดต้นทุนพลังงานได้สูงสุด 35%',
      specs: [
        'แพลตฟอร์ม (Platform): TD-GRID Enterprise Cloud & On-Premise Hybrid',
        'ความถี่ในการเก็บข้อมูล (Sampling Rate): Real-time 1,000 Hz ต่อจุดตรวจวัด',
        'จำนวนจุดเชื่อมต่อ (Capacity): รองรับสูงสุด 50,000 IoT Nodes ต่อคลัสเตอร์',
        'แดชบอร์ดแสดงผล (Visualization): 3D Digital Twin & Real-time Alert Matrix',
        'การแจ้งเตือนอัจฉริยะ (Predictive Maintenance): แจ้งเตือนล่วงหน้าก่อนเครื่องจักรขัดข้องด้วย AI Anomaly Detection',
        'การรองรับมาตรฐาน (Compliance): ISO 50001 Energy Management & IEC 62443 Cybersecurity',
        'การรับประกันและบริการ (SLA): 99.99% Uptime พร้อมทีมวิศวกรดูแล 24/7'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'
      ]
    })
  }
];

export const DEMO_POSTS = [
  {
    id: 'demo-post-1',
    title: 'TODAY DEVELOPMENT เปิดตัวสถาปัตยกรรมระบบอัตโนมัติยุคใหม่ ยกระดับอุตสาหกรรมไทยสู่มาตรฐานโลก',
    created_at: '2026-11-17T09:00:00+07:00',
    tag: 'CORPORATE HIGHLIGHT',
    content: 'บริษัท ทูเดย์ ดีเวลลอปเม้นท์ จำกัด (TODAY DEVELOPMENT CO., LTD.) เดินหน้าพัฒนาโซลูชันด้าน AI & Automation และระบบบริหารจัดการข้อมูลองค์กรแบบครบวงจร โดยผสานเทคโนโลยีการประมวลผลระดับ Edge เข้ากับฐานข้อมูลคลาวด์ความเร็วสูง เพื่อช่วยให้ภาคธุรกิจสามารถติดตามสถานะการผลิตและบริหารจัดการทรัพยากรได้อย่างแม่นยำแบบเรียลไทม์',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'demo-post-2',
    title: 'เจาะลึกระบบรักษาความปลอดภัยข้อมูลระดับองค์กรด้วย Row-Level Security (RLS) และ Cloud Telemetry',
    created_at: '2026-11-14T16:30:00+07:00',
    tag: 'TECH INSIGHT',
    content: 'ในยุคที่ข้อมูลคือหัวใจสำคัญของธุรกิจ การออกแบบโครงสร้างฐานข้อมูลที่ปลอดภัยตั้งแต่ระดับแถว (Row-Level Security) ช่วยป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาตได้อย่างเด็ดขาด พร้อมรองรับการขยายตัวของระบบเว็บไซต์และแอปพลิเคชันระดับองค์กรโดยไม่ลดทอนความเร็วในการประมวลผล',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'demo-post-3',
    title: 'อัปเดตความคืบหน้าโครงการติดตั้งระบบ Smart Grid & IoT Monitoring สำหรับภาคอุตสาหกรรม',
    created_at: '2026-11-11T11:20:00+07:00',
    tag: 'PROJECT UPDATE',
    content: 'ทีมวิศวกรของ TODAY DEVELOPMENT CO., LTD. ได้ดำเนินการส่งมอบและทดสอบระบบตรวจวัดการใช้พลังงานอัจฉริยะแบบเรียลไทม์ ช่วยให้ผู้ประกอบการสามารถวิเคราะห์กราฟโหลดพลังงานรายชั่วโมงและวางแผนซ่อมบำรุงเชิงพยากรณ์ (Predictive Maintenance) ได้อย่างมีประสิทธิภาพ',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'demo-post-4',
    title: 'แนวทางการพัฒนา Digital Platform ยุคใหม่ที่รองรับความเร็วสูงและประสบการณ์ผู้ใช้ระดับพรีเมียม',
    created_at: '2026-11-08T10:00:00+07:00',
    tag: 'INNOVATION',
    content: 'การผสมผสานดีไซน์ระดับสากลเข้ากับสถาปัตยกรรมไร้เซิร์ฟเวอร์ (Serverless & Edge CDN) ช่วยให้เว็บไซต์องค์กรสามารถโหลดข้อมูลได้อย่างรวดเร็ว รองรับผู้ใช้งานทุกขนาดหน้าจอ และสามารถอัปเดตเนื้อหาผ่านระบบ Admin Console ได้ทันทีจากทุกที่ทั่วโลก',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=85'
    ]
  }
];

// แยกข้อมูล Catalog Item (รองรับทั้งข้อความธรรมดา และ JSON ที่มี summary + specs + gallery)
export function parseCatalogItem(rawItem) {
  let summary = rawItem.description || '';
  let specs = [];
  let gallery = rawItem.image_url ? [rawItem.image_url] : [];

  if (typeof rawItem.description === 'string' && rawItem.description.trim().startsWith('{')) {
    try {
      const parsed = JSON.parse(rawItem.description);
      summary = parsed.summary ?? '';
      if (Array.isArray(parsed.specs)) {
        specs = parsed.specs.filter(Boolean);
      }
      if (Array.isArray(parsed.gallery) && parsed.gallery.length > 0) {
        gallery = parsed.gallery.filter(Boolean);
      }
    } catch (_e) {
      // fallback to plain text
    }
  }

  // หากเป็นข้อความธรรมดาที่มีหลายบรรทัด ให้แยกบรรทัดที่เป็นสเปคอัตโนมัติ
  if (specs.length === 0 && summary) {
    const lines = summary.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 1) {
      specs = lines;
    } else {
      specs = [
        `ชื่อรายการ (Model / Title): ${rawItem.title || '-'}`,
        `หมวดหมู่ / ราคา (Category / Price): ${rawItem.price_or_tag || 'Standard Solution'}`,
        `รายละเอียดจำเพาะ (Specification): ${summary}`,
        `มาตรฐานการผลิต (Standard): TODAY DEVELOPMENT CO., LTD. Corporate Standard`
      ];
    }
  }

  return {
    ...rawItem,
    summary,
    specs,
    gallery: gallery.length > 0 ? gallery : (rawItem.image_url ? [rawItem.image_url] : [])
  };
}

// แยกข้อมูลบทความ (Post) จากแถวในตาราง items
export function parsePostItem(rawRow) {
  let tag = 'CORPORATE UPDATE';
  let content = rawRow.description || '';
  let images = rawRow.image_url ? [rawRow.image_url] : [];
  let customDate = rawRow.created_at;

  if (typeof rawRow.description === 'string' && rawRow.description.trim().startsWith('{')) {
    try {
      const parsed = JSON.parse(rawRow.description);
      tag = parsed.tag || tag;
      content = parsed.content || '';
      if (Array.isArray(parsed.images) && parsed.images.length > 0) {
        images = parsed.images.filter(Boolean);
      }
      if (parsed.customDate) {
        customDate = parsed.customDate;
      }
    } catch (_e) {
      // fallback
    }
  }

  return {
    id: rawRow.id,
    title: rawRow.title,
    created_at: customDate || rawRow.created_at,
    tag,
    content,
    images
  };
}
