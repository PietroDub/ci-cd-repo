using Ci_Cd_Count.Classes;
using Ci_Cd_Count.Controllers;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Intrinsics.X86;

namespace UNIT_CI_CD
{
    [TestClass]
    public sealed class CiCdTests
        //Uma classe sealed é uma classe que não pode ser herdada
    {
        [TestMethod]
        public void MessageTest()
        {
            // Arrange
            var controller = new CiCdController();
            // Act
            var result = controller.Message();
            // Assert

            //Confirme que result é um OkObjectResult."
            Assert.IsInstanceOfType(result, typeof(OkObjectResult));

            // converte ele para acessar as propriedades
            var okResult = (OkObjectResult)result;

            // verifica se o statusCode é 200
            Assert.AreEqual(200, okResult.StatusCode);

            // verufucar se a mensagem é a esperada
            var response = (messageResponse)okResult.Value!;

            Assert.AreEqual("Olá GitHub Actions!", response.Message);
        }
    }
}
