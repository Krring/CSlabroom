# วิธี Deploy บน GitHub Pages

## ขั้นตอนทั้งหมด (ครั้งแรก)

### 1. สร้าง GitHub Account
ถ้ายังไม่มี → ไปที่ https://github.com แล้วสมัคร

### 2. สร้าง Repository ใหม่
1. กดปุ่ม **"New"** หรือ **"+"** มุมขวาบน
2. ตั้งชื่อ Repository เช่น `kring-labroom` หรือ `lab-website`
3. เลือก **Public** (GitHub Pages ฟรีต้องเป็น Public)
4. **ไม่ต้อง** tick README หรืออื่นๆ
5. กด **"Create repository"**

### 3. Upload ไฟล์
**วิธีง่ายที่สุด (ไม่ต้องใช้ Git):**
1. เปิด Repository ที่สร้าง
2. กด **"uploading an existing file"** หรือ **"Add file → Upload files"**
3. ลาก **ไฟล์ทั้งหมด** ใส่ (index.html, style.css, shared.js, ทุกไฟล์ .html)
4. กด **"Commit changes"**

### 4. เปิด GitHub Pages
1. ไปที่ **Settings** ของ Repository
2. เลื่อนลงหา **"Pages"** (ในเมนูซ้าย)
3. ใต้ **"Source"** เลือก **Branch: main** และ Folder: **/ (root)**
4. กด **"Save"**
5. รอ 1–2 นาที จะได้ URL เช่น:
   `https://yourusername.github.io/kring-labroom/`

### 5. เข้าเว็บได้เลย!
เปิด URL นั้นในเบราว์เซอร์ — เว็บพร้อมใช้งาน

---

## วิธีอัปเดตไฟล์ในอนาคต
1. แก้ไขไฟล์ที่ต้องการในคอมพิวเตอร์
2. เปิด GitHub → Repository → เลือกไฟล์ที่ต้องการแก้
3. กดไอคอน ✏️ (Edit) → แก้ไข → **"Commit changes"**
   **หรือ** ลากไฟล์ใหม่ทับไฟล์เดิมผ่าน "Add file → Upload files"
4. เว็บจะอัปเดตอัตโนมัติใน 1–2 นาที

---

## หมายเหตุสำคัญ
- ข้อมูลเก็บใน **localStorage** ของเบราว์เซอร์ผู้ใช้แต่ละคน
- ถ้าต้องการให้ข้อมูลแชร์กันได้จริง (เช่น task ของอาจารย์ส่งถึงนิสิต) ต้องเพิ่ม backend (Firebase, Supabase) ในอนาคต
- GitHub Pages เหมาะสำหรับ demo และใช้ภายในทีม
