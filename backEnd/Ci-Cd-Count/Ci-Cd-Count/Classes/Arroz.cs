using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Ci_Cd_Count.Classes
{
    public class Arroz
    {
        [BsonId]
        public string id { get; set; }
        [BsonRepresentation(BsonType.String)]
        public string nome { get; set; }
    }
}
