'use strict'

import axios from "axios"
import { storageService } from "./async-storage.service"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    let rate = storageService.loadFromStorage('rate')
    if (rate) return rate
    try {
        rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        storageService.saveToStorage('rate', rate.data)
        return rate.data
    }
    catch (err) {
        throw new Error('Err', err)
    }
}

async function getMarketPriceHistory() {
    // let pricesHistory = storageService.loadFromStorage('prices-history')
    let pricesHistory = storageService.loadFromStorage('prices-history')
    if (pricesHistory) return pricesHistory
    try {
        pricesHistory = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)
        storageService.saveToStorage('prices-history', pricesHistory.data)
        return pricesHistory.data
    }
    catch (err) {
        throw new Error('Err', err)
    }
}

async function getAvgBlockSize() {
    let blockSizeAvgs = storageService.loadFromStorage('block-size')
    if (blockSizeAvgs) return blockSizeAvgs
    try {
        blockSizeAvgs = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true`)
        storageService.saveToStorage('block-size', blockSizeAvgs.data)
        return blockSizeAvgs.data
    }
    catch (err) {
        throw new Error('Err', err)
    }
}
