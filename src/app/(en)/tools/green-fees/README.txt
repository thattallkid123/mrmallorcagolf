This folder holds only GreenFeesClient.jsx. The page itself is served at /tools/course-comparison
(src/app/**/tools/course-comparison/page.jsx, all seven languages). /tools/green-fees and
/<lang>/tools/green-fees are permanent redirects in vercel.json. The component and the
check scripts that read it keep the old file name on purpose.
