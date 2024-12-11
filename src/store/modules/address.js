import {getAddressList ,getAddressDefault,getAddDefault ,addAddressLists ,getAdressPCR} from '@/api/API-address'
// import { areaList } from '@vant/area-data'
export default {
    namespaced:true,
    state(){
        return {
            addressLists:[],
            addressId : '',
            areaLists:{}
        }
    },
    mutations:{
        getaddressLists(state,addressArr){
            state.addressLists = addressArr
        },
        setaddDefault(state,defaultId){
            const findDefaultAddress = state.addressLists.find(item => item.id === defaultId)
            const indexDefault = state.addressLists.indexOf(findDefaultAddress)
            if(findDefaultAddress){
                findDefaultAddress.isDefault = true
                state.addressId = defaultId
            }
            //数组解构
            [state.addressLists[0],state.addressLists[indexDefault]] = [state.addressLists[indexDefault],state.addressLists[0]]   
        },
        addressNewList(state,data){
            data = state.addressLists
        },
        addAdress(state,obj){
            state.addressLists.unshift(obj)
        },
        getRegion(state,list){
            state.areaLists = list
        }
    },
    actions:{
        async getadrerssAction(context){
            const {data : {list} } = await getAddressList()
            const address = list.map(item => {
                return {
                id:item.address_id,
                name : item.name,
                tel:item.phone,
                address:item.region.province + item.region.city + item.region.region + item.detail,
                }    
            })
            context.commit('getaddressLists',address)
        },
        async addressDefault(context) {
            const {data : {defaultId}} = await getAddressDefault()
            context.commit('setaddDefault',defaultId)
        },
        async getaddDefaultAction(context){
            const ID = context.getters.getdefaultID
            const {data} = await getAddDefault(ID)
            context.commit('addressNewList',data)
        },
        //获取省市区
        async getRegionAction(context){
            const {data : {list}} = await getAdressPCR()
            context.commit('getRegion',list)
        },
        //向后台添加收货地址
        // async addadressAction(context,{name,tel,address}){
        //     const res = await addAddressLists()
        //     console.log(res);
            
        // }
    },
    getters:{
        getdefaultID(state){
            return state.addressId
        }
    }
        
}