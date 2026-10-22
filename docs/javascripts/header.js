/* global document$ */
const fix = () => document.querySelectorAll(".md-source").forEach(a => a.title = "Jump to device guides");
fix();
document$.subscribe(fix);
