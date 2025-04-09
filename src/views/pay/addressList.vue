<template>
  <div class="address-container">
    <van-nav-bar fixed title="收获地址列表" left-arrow @click-left="$router.go(-1)" />

    <!-- 收获地址列表 -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      default-tag-text="常用地址"
      @add="onAdd"
      @edit="onEdit"
    />

    <!-- 新增收获地址 -->
    <van-action-sheet v-model="show" title="标题">
      <div class="content">
        <van-address-edit
          :area-list="areaList"
          show-area
          show-delete
          show-set-default
          :area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
          @delete="onDelete"
        />
      </div>
    </van-action-sheet>

    <!-- 编辑收获地址 -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import { areaList } from '@vant/area-data';
import {addAddressLists} from '@/api/API-address'
export default { 
  name:'addressList',
  data() {
    return {
      chosenAddressId: '',
      list: [],
      disabledList: [],
      //地区列表
      areaList,
      searchResult: [], 
      addShow:false,
      show: false,
    }
},
  methods: {
    // 收获地址列表
    onAdd() {
      this.show = !this.show
      this.$store.dispatch('address/getRegionAction')
      console.log('Area List:', this.areaList); // 添加调试信息
      // this.areaList = this.areaLists
      this.$toast('新增地址')
    },
    onEdit(item, index) {
      this.$toast('编辑地址:' + index)
      console.log(item)
    },
    // 新增收获地址
    onSave(content) {
      this.show = !this.show
      this.$toast('save')
      this.$store.commit('address/addAdress',{
        id:Date.now().toString(),
        name:content.name,
        tel:content.tel,
        address:content.province + content.city + content.county + content.addressDetail
      })
    },
    onDelete() {
      this.$toast('delete')
    },
    //收获地址列表
    async AddressList() {
      await this.$store.dispatch('address/getadrerssAction')
      this.list = this.addressLists
      
    },
    // 默认的收货地址
    async addressDefaults() {
      await this.$store.dispatch('address/addressDefault')
      this.chosenAddressId = this.addressId
    },
    async getadddefault(){
      await this.$store.dispatch('address/getaddDefaultAction')
    },
    
  },
  computed:{
    ...mapState('address',['addressLists','addressId','areaLists']),
  },
  async created(){
    await this.AddressList()
    await this.addressDefaults()
    await this.getadddefault()
  }
}
</script>

<style lang="less">
  van-address-list{
    @address-list-padding:10px;
  }
  .van-address-item:nth-child(1) .van-radio__label {
    margin-top: 7vw;
  }
  .content {
    padding: 16px 16px 160px;
  }
</style>