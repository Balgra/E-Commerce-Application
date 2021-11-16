using System.Linq;
using System.Security.Claims;

namespace WebApplication4.Extentions
{
    public static class ClaimsPrincipleExtensions
    {
        public static string RetriveEmailFromPrinciple(this ClaimsPrincipal user)
        {
            return user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
        }
    }
}