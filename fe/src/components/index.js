/* only for building vux.css */
import Style from '../assets/style/index.vue' // eslint-disable-line

import Picker from './picker'
import Datetime from './datetime'
import Group from './group'
import InlineDesc from './inline-desc'
import AddressChinaData from './address/list.json'
import Address from './address'
import Cell from './cell'
import Selector from './selector'
import XInput from './x-input'

const vux = {
    Picker,
    Datetime,
    Group,
    InlineDesc,
    Address,
    AddressChinaData,
    Cell,
    Selector,
    XInput
}

if (!process.env) { // eslint-disable-line
    const { getMetas } = require('../../build/build-metas')
    const metas = getMetas(vux)
    if (window.fetch) {
        window.fetch('http://localhost:3000/api/doc', {
            method: 'POST',
            body: JSON.stringify(metas),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

module.exports = vux
