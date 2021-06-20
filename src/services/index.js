const itemModel = require('../model/item');


class ItemServices {
    getIndividualItem(id) {
        return itemModel.findOne({ _id: id })
            .select(`name description price rating dateLastPurchased`)
            .exec()
    }

    getAllItem(limit, page) {
        return itemModel.find()
            .select(`name description price rating dateLastPurchased`)
            .sort({ name: "asc" })
            .limit(limit)
            .skip(page * limit)
            .exec()
    }

    getItemCount() {
        return itemModel.countDocuments()
    }
}

module.exports = new ItemServices()