# วิธี Deploy บน GitHub Pages

## ขั้นตอนทั้งหมด (ครั้งแรก)

### 1. สร้าง GitHub Account
ไปที่ https://github.com/signup แล้วสมัครบัญชี (ถ้ายังไม่มี)

### 2. สร้าง Repository ใหม่
1. กด **New repository** (ปุ่มสีเขียว)
2. ตั้งชื่อ: `kring-lab` (หรือชื่ออะไรก็ได้)
3. ตั้งเป็น **Public**
4. **อย่าติ๊ก** Initialize this repository
5. กด **Create repository**

### 3. Upload ไฟล์
วิธีง่ายที่สุด — ไม่ต้องใช้ command line:
1. ในหน้า repository ที่เพิ่งสร้าง กด **uploading an existing file**
2. ลาก **ทุกไฟล์ในโฟลเดอร์** ไปวางในกล่อง
3. กด **Commit changes**

### 4. เปิด GitHub Pages
1. ไปที่แท็บ **Settings** (ในหน้า repository)
2. เลือก **Pages** ในเมนูซ้าย
3. ส่วน **Source** เลือก: `Deploy from a branch`
4. Branch: เลือก `main` → folder: `/ (root)`
5. กด **Save**

### 5. รอ 1-2 นาที แล้วเข้าเว็บ
URL จะเป็น: `https://[username].github.io/kring-lab/`

---

## วิธีแก้ไขไฟล์แล้ว Upload ใหม่

1. แก้ไขไฟล์ที่ต้องการในเครื่อง
2. ไปที่ GitHub repository
3. คลิกที่ไฟล์ที่จะแทนที่
4. กดไอคอน **ดินสอ** (Edit)
5. วางโค้ดใหม่ → **Commit changes**

หรือจะ upload ไฟล์ใหม่ทับของเดิมก็ได้

---

## Tips

- เว็บจะอัปเดตภายใน 1-2 นาทีหลัง commit
- ข้อมูล (notebook, แผน ฯลฯ) เก็บใน **localStorage** ของ browser
  - แต่ละคนเห็นข้อมูลของตัวเองในเครื่องตัวเอง
  - ถ้าต้องการ sync ข้อมูลระหว่างอุปกรณ์ ต้องเพิ่ม backend (เช่น Firebase) ในอนาคต
- ถ้าอยากได้ domain name เป็น `.ku.th` ต้องติดต่อ IT มก.
