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

let linkFacebook = `https://facebook.com/123`
let hinhAnh = `https://marketplace.canva.com/MADFf6Bosc0/1/thumbnail_large/canva-beautiful-natural-background.-MADFf6Bosc0.jpg`
let hinhAnhSP = `https://cdn1.viettelstore.vn/Images/Product/ProductImage/1221653683.png`

let giaTien = ref(40000000)

let soLuong = ref(1)

let tangSLSP = () => {
  soLuong.value++
}

let giamSLSP = () => {
  if (soLuong.value > 1) {
    soLuong.value--
  }
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

      <a :href="linkFacebook">Link Facebook</a>

      <img :src="hinhAnh" alt="" />
    </div>

    <!-- Bài tập 1:
    - Yêu cầu sử dụng giao diện component card của bootstrap
    - Giao diện gồm có hình ảnh 1 sản phẩm, tên sản phẩm, giá tiền, số lượng, thành tiền
    - Khi bấm chuột nút tính tiền thì thực hiện tính theo công thức: 
    Số lượng * đơn giá
    -->
    <div class="col-md-6">
      <div class="card" style="width: 18rem">
        <!-- Sử dụng :src để dẫn hình từ biến -->
        <img :src="hinhAnhSP" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">iPhone Duo</h5>
          <p class="card-text">Giá tiền: {{ giaTien.toLocaleString('vi-VN') }}đ</p>
          <p class="card-text">Số lượng: {{ soLuong }}</p>
          <p class="card-text">Thành tiền: {{ (soLuong * giaTien).toLocaleString('vi-VN') }}đ</p>
          <button class="btn btn-primary my-3" @click="tangSLSP">Tăng số lượng sản phẩm</button>
          <button class="btn btn-primary" @click="giamSLSP">Giảm số lượng sản phẩm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
