<template>
    <div class="container">
        <group title="时间选择组件">
            <datetime :value.sync="datetime1" placeholder="起始时间" :min-year=1960 :max-year=2040 format="YYYY-MM" @on-change="change" title="起始时间" year-row="{value}年"
                      month-row="{value}月" confirm-text="完成" cancel-text="取消"></datetime>
        </group>

        <group title="时间选择组件">
            <datetime :value.sync="datetime2" placeholder="结束时间" :min-year=1960 :max-year=2040 format="YYYY-MM" @on-change="change" title="结束时间" year-row="{value}年"
                      month-row="{value}月" confirm-text="完成" cancel-text="取消"></datetime>
        </group>

        <group title="地区选择组件">
            <address @on-hide="logHide" @on-show="logShow" :title="title" :value.sync="city" :list="addressData" placeholder="请选择地址"></address>
            <cell title="上面value值" :value="city | json"></cell>
        </group>

        <group title="下拉选择">
            <selector placeholder="请选择省份" :options="list"></selector>
        </group>

        <group title="默认输入框">
            <x-input title="message" placeholder="默认Input"></x-input>
        </group>

        <group title="输入中文名字">
            <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
        </group>

        <group title="输入手机号码">
            <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>
    </div>
</template>
<script>
import { Datetime, Group, Address, AddressChinaData, Cell, Selector, XInput } from '../components'
import value2name from '../filter/value2name'

export default {
    components: {
        Datetime,
        Group,
        Address,
        Cell,
        Selector,
        XInput
    },
    data () {
        return {
            datetime1: '',
            datetime2: '',
            title: '默认为空地区',
            city: [],
            addressData: AddressChinaData,
            list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}]
        }
    },
    methods: {
        change (value) {
            console.log('change', value)
        },
        clearValue (value) {
            this.$data.value6 = ''
            console.log('clear')
        },
        setToday (value) {
            let now = new Date()
            let cmonth = now.getMonth() + 1
            let day = now.getDate()
            if (cmonth < 10) cmonth = '0' + cmonth
            this.$data.value7 = now.getFullYear() + '-' + cmonth + '-' + day
            console.log('set today ok')
        },
        changeData () {
            this.value2 = ['430000', '430400', '430407']
        },
        getName (value) {
            return value2name(value, AddressChinaData)
        },
        logHide (str) {
            console.log('on-hide', str)
        },
        logShow (str) {
            console.log('on-show')
        }
    }
}
</script>
<style lang="less" scoped>

</style>