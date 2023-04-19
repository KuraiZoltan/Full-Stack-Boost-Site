﻿using EmailSender.Models;
using EmailSender.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmailSender.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private OrderService _orderService;

        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        [Route("getAllOrders")]
        //[Authorize(Users = "Fake, Zolika1022")]
        public IEnumerable<OrderDetails> GetAllOrders()
        {
            return _orderService.GetAllOrders();
        }
    }
}