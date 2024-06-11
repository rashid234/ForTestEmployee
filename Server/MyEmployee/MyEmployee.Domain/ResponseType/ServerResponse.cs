using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyEmployee.Domain.ResponseType
{
    public class ServerResponse<TResult>
    {
        public bool IsValid { get; set; }

        public string ResponseMessage { get; set; }

        public TResult Result { get; set; }
    }
}
