<script setup>
import { ref } from 'vue'

let hoTen = `Tuấn Anh`

// Sử dụng ref để quản lý sự thay đổi của 1 biến
// LƯU Ý: muốn lấy ra giá trị của 1 biến khi sử dụng với ref thì sẽ phải dùng
// .value
let so = ref(0)

let tang = () => {
  so.value++
}

let giam = () => {
  so.value--
}

let datLai = () => {
  so.value = 0
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Đây là trang product</h3>
      <!-- <p>{{ hoTen }}</p> -->
      <p>{{ so }}</p>
      <button class="btn btn-primary mx-3" @click="tang">Tăng</button>
      <button class="btn btn-primary mx-3" @click="giam">Giảm</button>
      <button class="btn btn-primary mx-3" @click="datLai">Đặt lại</button>
    </div>
  </div>
</template>

<style scoped></style>
