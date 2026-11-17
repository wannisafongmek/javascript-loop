/*Exercise #3: Find the Minimum Number
สมมุติว่าเรามี Variable ตั้งต้น studentScores ซึ่งบรรจุคะแนนสอบของนักเรียนในห้อง ดังนี้ [100, 20, 3, 100]
ให้เขียนโปรแกรมในการหาคะแนนสอบที่น้อยที่สุดของนักเรียนในห้อง
เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
3
*/
// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0]; // กำหนดค่าเริ่มต้นเป็นตัวแรก

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minScore) {
        minScore = scores[i]; // ถ้าเจอตัวที่น้อยกว่า ให้บันทึกเก็บไว้
    }
}
console.log(minScore);