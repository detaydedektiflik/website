var tarih = new Date();
var yil = tarih.getFullYear();
document.querySelector('.copyright').innerText = '\u00A9 '+yil+' '+document.querySelector('.copyright').innerText;
element = document.querySelectorAll('[href="#tel"]');
kosul = element.length;
element[0].innerText = atob('MDUzMCAyMTkgNDUgNDA=');
for(i=0;i<kosul;i++)
{
	element[i].setAttribute('href',atob('dGVsOjA1MzAgMjE5IDQ1IDQw'));
}
///////////////////////////
element = document.querySelectorAll('[href="#tel2"]');
kosul = element.length;
element[0].innerText = atob('MDUzMiAwNjUgNzggMTY=');
for(i=0;i<kosul;i++)
{
	element[i].setAttribute('href',atob('dGVsOjA1MzIgMDY1IDc4IDE2'));
}
///////////////////////////
element = document.querySelectorAll('[href="#mail"]');
kosul = element.length;
for(i=0;i<kosul;i++)
{
	element[i].setAttribute('href',atob('bWFpbHRvOmluZm9AZGV0YXlkZWRla3RpZmxpay5jb20='));
	element[i].innerText = atob('aW5mb0BkZXRheWRlZGVrdGlmbGlrLmNvbQ==');
}