# بندو · دمو امکانات (`resturan_nasr`)

صفحهٔ نمایشی امکانات نرم‌افزار بندو — فارسی، RTL، بدون بک‌اند.

## اجرای محلی

```bash
cd resturan_nasr
npm install
npm run dev
```

باز کنید: [http://localhost:3000](http://localhost:3000)

## دیپلوی روی Vercel (بدون دردسر)

1. این پوشه را به یک ریپوی جدا بفرستید (یا در Vercel Root Directory را `resturan_nasr` بگذارید).
2. Framework Preset: **Next.js**
3. Build Command: `npm run build`
4. Output: پیش‌فرض Next.js (نیازی به تنظیم خاص نیست)
5. Environment Variables: **هیچ** لازم نیست
6. Node: ۱۸ یا بالاتر

دکمهٔ Import روی [vercel.com/new](https://vercel.com/new) کافی است.

## نکات

- هیچ API، دیتابیس یا env متغیری ندارد.
- فونت از Google Fonts (`Vazirmatn`) لود می‌شود.
- برای جدا کردن از پروژهٔ Django، کل پوشهٔ `resturan_nasr` را کپی کنید.
