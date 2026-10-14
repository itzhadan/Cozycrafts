# cozy.expresphone.com

Cloudflare Worker `cozy-proxy` (חשבון itzhadan, דומיין expresphone.com) מעביר כל בקשה ל-`arnonidan.pythonanywhere.com`.
המבקר רואה `cozy.expresphone.com`; הכתובת הישנה ממשיכה לעבוד.
בתוכנית החינמית של PythonAnywhere אי אפשר לחבר דומיין משלך – לכן ההפניה דרך Cloudflare (חינם עד 100,000 בקשות ביום).
הקוד שרץ ב-Cloudflare הוא גרסה מכווצת של `cozy-proxy.js`.
