document.addEventListener('DOMContentLoaded', function() {
    // مختصات جغرافیایی محل شرکت
    const companyLat = 35.6892;
    const companyLng = 51.3890;
    const companyAddress = "تهران، خیابان ولیعصر، کوچه فلان، پلاک 12، طبقه 3";
    
    // لینک‌های سرویس‌های نقشه
    const mapServices = {
        google: `https://www.google.com/maps/search/?api=1&query=${companyLat},${companyLng}`,
        googleApp: `https://maps.google.com/?q=${companyLat},${companyLng}`,
        waze: `https://www.waze.com/ul?ll=${companyLat},${companyLng}&navigate=yes`,
        bing: `https://www.bing.com/maps?q=${companyLat},${companyLng}`,
        apple: `https://maps.apple.com/?q=${companyLat},${companyLng}`,
        osm: `https://www.openstreetmap.org/?mlat=${companyLat}&mlon=${companyLng}#map=18/${companyLat}/${companyLng}`,
        neshan: `https://neshan.org/maps/@${companyLat},${companyLng},16.0z,0.0p/search/${encodeURIComponent(companyAddress)}`,
         balad: `https://balad.ir/location?latitude=${companyLat}&longitude=${companyLng}&title=${encodeURIComponent(companyAddress)}`
    };
    
    // باز کردن مودال هنگام کلیک روی دکمه
    document.getElementById('openMapBtn').addEventListener('click', function() {
        const modal = new mdb.Modal(document.getElementById('mapModal'));
        modal.show();
    });
    
    // تنظیم لینک‌ها برای دکمه‌های نقشه
    document.getElementById('googleMapBtn').href = mapServices.google;
    document.getElementById('wazeBtn').href = mapServices.waze;
    document.getElementById('bingBtn').href = mapServices.bing;
    document.getElementById('appleMapBtn').href = mapServices.apple;
    document.getElementById('osmBtn').href = mapServices.osm;
    document.getElementById('neshanBtn').href = mapServices.neshan;
    document.getElementById('baladBtn').href = mapServices.balad;

    
    // تشخیص دستگاه موبایل برای باز کردن مستقیم اپلیکیشن
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.getElementById('googleMapBtn').href = mapServices.googleApp;
    }
});