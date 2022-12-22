const db = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    try {
      console.log('>>>>>>>>>>>>>>>',req.session.orderCart);

      return res.status(200).json({
        ok: true,
        data: req.session.orderCart || null,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upps, un error!",
      });
    }
  },
  addItem: async (req, res) => {
    try {
      const { id } = req.body;

      let item = req.session.orderCart.items.find(
        (item) => item.product.id === +id
      );

      if (item) {
        await db.Cart.update(
          {
            quantity: item.quantity + 1,
          },
          {
            where: {
              id: item.id,
            },
          }
        );

        const itemsModify = req.session.orderCart.items.map((element) => {
          if (element.id === item.id) {
            element.quantity = element.quantity + 1;
            return element;
          }
          return element;
        });


        const prices = itemsModify.map(item => item.product.price * item.quantity);
        const total = prices.reduce((acum,num) => acum + num, 0)

        req.session.orderCart = {
          ...req.session.orderCart,
          total,
          items: itemsModify,
        };
      } else {
        const newCartItem = await db.Cart.create({
          quantity: 1,
          productId : id,
          orderId: req.session.orderCart.id,
        });

        console.log(newCartItem);

        const cartItem = await db.Cart.findByPk(newCartItem.id, {
          attributes: ["id", "quantity"],
          include: [
            {
              association: "product",
              attributes: ["id", "name", "price", "discount"],
              include: ["images"],
            },
          ],
        });

        const prices = req.session.orderCart.items.map(item => item.product.price * item.quantity);
        const total = prices.reduce((acum,num) => acum + num, 0)

        req.session.orderCart = {
          ...req.session.orderCart,
          total,
          items: [...req.session.orderCart.items, cartItem],
        };
      }

      return res.status(200).json({
        ok: true,
        data: req.session.orderCart || null,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upps, un error!",
      });
    }
  },
  modifyQuantity: async (req, res) => {
    try {
      const { id, quantity } = req.body;

      let item = req.session.orderCart.items.find(
        (item) => item.id === +id
      );

     
        await db.Cart.update(
          {
            quantity,
          },
          {
            where: {
              id: item.id,
            },
          }
        );

        const itemsModify = req.session.orderCart.items.map((element) => {
          if (element.id === item.id) {
            element.quantity = +quantity;
            return element;
          }
          return element;
        });

        const prices = itemsModify.map(item => item.product.price * item.quantity);
        const total = prices.reduce((acum,num) => acum + num, 0);

        await db.Order.update(
          {
            total,
          },
          {
            where: {
              id: req.session.orderCart.id,
            },
          }
        );

        req.session.orderCart = {
          ...req.session.orderCart,
          total,
          items: itemsModify,
        };


      return res.status(200).json({
        ok: true,
        data: req.session.orderCart || null,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upps, un error!",
      });
    }
  },
  removeItem: async (req, res) => {
    try {
      const { id } = req.params;

        await db.Cart.destroy({
          where: {
            id,
          },
        });

        const itemsModify = req.session.orderCart.items.filter(
          (element) => element.id !== +id
        );

        const prices = itemsModify.map(item => item.product.price * item.quantity);
        const total = prices.reduce((acum,num) => acum + num, 0)

        req.session.orderCart = {
          ...req.session.orderCart,
          total,
          items: itemsModify,
        };

      return res.status(200).json({
        ok: true,
        data: req.session.orderCart || null,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upps, un error!",
      });
    }
  },
};
