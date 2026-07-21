using Ci_Cd_Count.Classes;
using Ci_Cd_Count.Controllers;
using Ci_Cd_Count.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UNIT_CI_CD
{
    [TestClass]
    public sealed class test2
    {
         private readonly MongoDbService _mongo;

        public test2(MongoDbService mongo)
        {
            _mongo = mongo;
        }

        [TestMethod]
        public async void InserirArrozTest()
        { 

           var controller = new CiCdController(_mongo);

            var arroz = new Arroz
            {
                nome = $"Arroz {Guid.NewGuid()}"
            };

            var result = await controller.ArrozPost(arroz);

            Assert.IsInstanceOfType(result, typeof(OkResult));

            var okResult = (OkResult)result;

            Assert.AreEqual(200, okResult.StatusCode);

        }
    }
}
