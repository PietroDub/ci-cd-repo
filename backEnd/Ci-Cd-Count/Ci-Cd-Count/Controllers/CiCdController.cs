using Ci_Cd_Count.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ci_Cd_Count.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CiCdController : ControllerBase
    {
        [HttpGet]
        public ActionResult Message()
        {
            return Ok(new messageResponse
            {
                Message = "Olá GitHub Actions!"
            });
        }
    }
}
