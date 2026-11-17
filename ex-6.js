/*Exercise #6: (Optional Challenge) Reverse the String
ข้อนี้เป็นโจทย์เสริม สำหรับคนที่อยากฝึกฝนเพิ่มเติม
สมมุติว่าเรามี Variable ตั้งต้น companyName ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp Thailand"
ให้เขียนโปรแกรมในการเรียงตัวอักษรกลับด้าน
เช่น "abcd" จะกลายเป็น "dcba"

"dnaliahT pUhceT" 
*/


// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = ""; // สร้างตัวแปร String เปล่าไว้รอเก็บข้อความกลับด้าน

// Start coding here
for (const char of companyName) {
    reversedCompanyName = char + reversedCompanyName; // เอาตัวอักษรใหม่มาวางไว้ข้างหน้าสุด
}

console.log(reversedCompanyName);