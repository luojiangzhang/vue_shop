<template>
    <div class="login_container">
        <img class="login_background" src="../assets/img/hayaka.png" alt="">
      <div class="login_box">
         <!--头像区域-->
        <div class="avatar_box">
            <img class="avatar" src="../assets/img/ayaka.png" alt="">
        </div>
        <!--登录表单区域-->
        <el-form  label-width="0px" class="login_form">
              <!-- 用户名 -->
           <el-form-item >
               <el-input></el-input>
           </el-form-item>
             <!-- 密码 -->
           <el-form-item >
               <el-input></el-input>
           </el-form-item>
             <!-- 按钮区域 -->
           <el-form-item class="btns">
             <el-button type="primary" >登录</el-button>
             <el-button type="info">重置</el-button>
           </el-form-item>
       </el-form>
      </div>
    </div>
</template>

<script>

export default {
       
    }
</script>

<style lang="less" scoped>
.login_container {
    background-color: #000000;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}

.avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff00;
}
   
   .avatar {
       width: 100%;
       height: 100%;
       border-radius: 50%;
       background-color: #eee;
   }

   .login_background {
       width: 100%;
       height: 100%;
   }

.btns {
   display: flex;
   justify-content: flex-end;
}

.login_form  {
   position: absolute;
   bottom: 0;
   width: 100%;
   padding: 10px;
   box-sizing: border-box;
}
</style>