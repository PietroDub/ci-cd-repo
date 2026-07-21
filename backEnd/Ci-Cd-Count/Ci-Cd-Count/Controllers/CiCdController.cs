using Ci_Cd_Count.Classes;
using Ci_Cd_Count.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Ci_Cd_Count.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CiCdController : ControllerBase
    {
        private readonly MongoDbService _mongo;
        private readonly IMongoCollection<Arroz> _arroz;
        public CiCdController(MongoDbService mongo)
        {
            _mongo = mongo;
            _arroz = mongo.Database.GetCollection<Arroz>("Arroz");
        }

        [HttpGet]
        public ActionResult Message()
        {
            return Ok(new messageResponse
            {
                Message = "Olá GitHub Actions!"
            });
        }

        [HttpPost]
        public async Task<IActionResult> ArrozPost([Bind("nome")] Arroz arroz)
        {
            arroz.id = ObjectId.GenerateNewId().ToString();

            await _arroz.InsertOneAsync(arroz);

            return Ok();
        }
    }
}
