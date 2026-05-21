# วิธี Deploy บน GitHub Pages

## ขั้นตอนทั้งหมด (ใช้เวลาประมาณ 5 นาที)

### 1. สร้าง GitHub Account (ถ้ายังไม่มี)
- ไปที่ https://github.com → Sign up

### 2. สร้าง Repository ใหม่
1. กดปุ่ม **"+"** (มุมบนขวา) → **"New repository"**
2. ตั้งชื่อ: `kring-lab` (หรือชื่ออื่นที่ต้องการ)
3. เลือก **Public**
4. ✅ ติ๊ก **"Add a README file"**
5. กด **"Create repository"**

### 3. อัปโหลดไฟล์
1. ในหน้า repository → กด **"Add file"** → **"Upload files"**
2. ลากไฟล์ทั้งหมดใส่:
   - `index.html`
   - `register.html`
   - `dashboard.html`
   - `admin.html`
   - `style.css`
   - `shared.js`
3. เลื่อนลงล่าง → กด **"Commit changes"**

### 4. เปิด GitHub Pages
1. ไปที่ **Settings** (แถบเมนูบนสุดของ repo)
2. เลือก **"Pages"** (เมนูซ้าย)
3. ใต้ **"Source"** → เลือก **"Deploy from a branch"**
4. Branch: **main** → Folder: **/ (root)**
5. กด **Save**

### 5. รอ ~1 นาที แล้วเข้าได้ที่:
```
https://YOUR_USERNAME.github.io/kring-lab/
```

## ข้อควรรู้
- ข้อมูลเก็บใน **localStorage** ของ browser แต่ละเครื่อง
- ถ้าต้องการ sync ข้ามอุปกรณ์จริง ต้องเพิ่ม Firebase หรือ Supabase ในอนาคต
- GitHub Pages รองรับไฟล์ static HTML/CSS/JS ได้ 100%
