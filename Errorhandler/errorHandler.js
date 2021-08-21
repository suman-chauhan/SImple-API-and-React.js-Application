class ErrorHnadler 
{
    constructor(status, msg)
    {
        this.status=status;
        this.message = msg;

    }
    static validationError (message = 'All fields are required')
    {
      return new ErrorHnadler(422,message);
    }

    static notFoundError (message = 'Page Not found')
    {
        return new ErrorHnadler(404,message);  
    }
    static serverError  (message = 'Internal server error')
    {
        return new ErrorHnadler(500,message);  
    }
}

module.exports = ErrorHnadler;