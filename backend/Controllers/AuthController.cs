using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController(AuthService authService) : ControllerBase
    {
        private readonly AuthService _authService = authService;

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            bool isValid = _authService.ValidateUser(loginDto.Email, loginDto.Password);
            if (!isValid)
                return Unauthorized(new { message = "Invalid email or password" });

            var token = _authService.GenerateToken(loginDto.Email);

            return Ok(new { token });
        }

        [Authorize]
        [HttpGet("secure-data")]
        public IActionResult GetSecureData()
        {
            return Ok(new { message = "هذي بيانات محمية ولازم توكن للوصول لها" });
        }


    }
}
