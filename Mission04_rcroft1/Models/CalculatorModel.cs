using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_rcroft1.Models
{
    public class CalculatorModel
    {
        // creating variables and validation

        [Range(0,100, ErrorMessage = "The Assignments grade must be between 0 and 100.")]
        public decimal assignments { get; set; }

        [Range(0, 100, ErrorMessage = "The Quizzes grade must be between 0 and 100.")]
        public decimal quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "The Group Projects grade must be between 0 and 100.")]
        public decimal groupProjects { get; set; }

        [Range(0, 100, ErrorMessage = "The Intex grademust be between 0 and 100.")]
        public decimal intex { get; set; }

        [Range(0, 100, ErrorMessage = "The Midterm grade must be between 0 and 100.")]
        public decimal midterm { get; set; }

        [Range(0, 100, ErrorMessage = "The Final Exam grade must be between 0 and 100.")]
        public decimal final { get; set; }
    }
}
