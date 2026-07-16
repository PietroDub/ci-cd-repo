using Ci_Cd_Count.Classes;
using Ci_Cd_Count.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace UNIT_CI_CD
{
    [TestClass]
    public sealed class CiCdTests
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
