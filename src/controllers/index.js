
const mongoose = require('mongoose');
const responseHelper = require('../libs/response')
const pagination = require('../libs/pagination');
const itemServices = require('../services/index');
const moment = require('moment')


class ItemController {

    /**
     * @description gets only the item data of the id passed as a param
     * @param {*} req req - Http Request object
     * @param {*} res res - Http Response object
     * @returns {Object} returns object of the required response
     */
    async getItemById(req, res) {
        try {
            let { id } = req.params
            if (!id) {
                return res.status(400)
                    .send(responseHelper.error(400, `id is required`))
            }
            const isValid = mongoose.Types.ObjectId.isValid(id)
            if (!isValid) {
                return res.status(400).send(responseHelper.error(400, 'invalid Id'))
            }
            let day = moment(new Date(), 'YYYY/D/M').toISOString()
            let getIndividualItem = await itemServices.getIndividualItem(id)
            if (!getIndividualItem) {
                return res.status(400).send(responseHelper.error(400, `No item exist for the id passed`))
            }
            getIndividualItem = JSON.parse(JSON.stringify(getIndividualItem))
            let anotherDay = moment(getIndividualItem.dateLastPurchased, 'YYYY/D/M')
            getIndividualItem.totalNumberOfDaysToLastPurchase =
                moment(day).diff(anotherDay, 'days')
            return res.status(200)
                .send(responseHelper.output(200, `item data gotten successefully`, getIndividualItem))
        } catch (error) {
            console.log('Internal server error', error)
            return res.status(500)
                .send(responseHelper.error(500, `Internal server error, ${error}`))
        }
    }

    /**
     * @description gets all the items data and paginates them
     * @param {*} req req - Http Request object
     * @param {*} res res - Http Response object
     * @returns {Object} returns object of the required response
     */
    async getAllItems(req, res) {
        try {
            let { limit, page } = req.query
            let body = []
            limit = !limit ? 10 : parseInt(limit)
            page = !page ? 0 : parseInt(page) - 1

            let items = await itemServices.getAllItem(limit, page)
            let today = moment(new Date(), 'YYYY/D/M').toISOString()
            items = (JSON.parse(JSON.stringify(items)))
            for (let each of items) {
                let anotherDay = moment(each.dateLastPurchased, 'YYYY/D/M')
                each.totalNumberOfDaysToLastPurchase = moment(today).diff(anotherDay, 'days')
                body.push(each)
            }
            const count = await itemServices.getItemCount()
            const paginate = {
                limit, page
            }
            return res.status(200)
                .send(responseHelper.success(200, 'All items retrieved successfully', body, pagination(count, paginate)))
        } catch (error) {
            console.log('Internal server error', error)
            return res.status(500)
                .send(responseHelper.error(500, `Internal server error, ${error}`))
        }
    }
}

module.exports = new ItemController()