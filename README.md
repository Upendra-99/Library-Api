# Syngenta-assignment (Library API)

Develop NodeJS backend APIs to support a Library system
Description:
The APIs should support following operations:

- Adding new books to the backend system – book would have properties like title,
  author, category (example fiction, self help, technology, etc.), etc.
- Ability to list all books, list books based on category.
- Ability to search books based on title or author.
- Ability to order book for reading
- Ability to return book after reading
- APIs should also be able to list all tracking information of any book like when it
  was ordered, returned, etc.


## How to install locally

- Clone the repository

## How to test with postman with api url

- You can use below given url to run on postman

## Steps to use the API

1. Create a new book with the following information with endpoint :
      http://localhost:9008/CreateBook

      Send JSON

      ```json
      {
          "Title":"The business school",
          "Author":"Robert T. Kiyosaki",
          "Category":"Self Help"
      }
      ```

      Response JSON

      ```json
      {
          "status": "Success",
          "message": "Book Successfully Created"
      }
      ```

2. Get list of all books from Library :
    http://localhost:9008/AllBooks

    Response JSON

    ```json
    {
        "message": "Done",
        "data": [
            {
                "_id": "6293b6dff3148892c16f84bd",
                "Title": "Wings of fire",
                "Author": "APJ Abdul Kalam",
                "Category": "Informational",
                "Availability": true,
                "__v": 0
            },
            {
                "_id": "6293cf77f8d4d9233a57d942",
                "Title": "The business school",
                "Author": "Robert T. Kiyosaki",
                "Category": "Self Help",
                "Availability": true,
                "__v": 0
            }
        ]
    }
    ```



3. Get books based on category :
   http://localhost:9008/getCategory/Self Help
 

    Response JSON

    ```json
    {
        "status": "Success",
        "data": [
            {
                "_id": "6293b6b1f3148892c16f84b9",
                "Title": "Rich dad poor dad",
                "Author": "Robert kawasaki",
                "Category": "Self Help",
                "Availability": true,
                "__v": 0
            },
            {
                "_id": "6293cf77f8d4d9233a57d942",
                "Title": "The business school",
                "Author": "Robert T. Kiyosaki",
                "Category": "Self Help",
                "Availability": true,
                "__v": 0
            }
        ]
    }
    ```

4. Get books based on Author name :
   http://localhost:9008/getAuthor/Robert T. Kiyosaki
 

    Response JSON

    ```json
    {
        "status": "Success",
        "data": [
            {
                "_id": "6293cf77f8d4d9233a57d942",
                "Title": "The business school",
                "Author": "Robert T. Kiyosaki",
                "Category": "Self Help",
                "Availability": true,
                "__v": 0
            }
        ]
    }
    ``
5. To order book for reading :
   http://localhost:9008/orderBook/6293cf77f8d4d9233a57d942
 

    Response JSON

    ```json
    {
        "status": "success",
        "message": "The business school has been ordered"
    }
    ``
    7. List all tracking information of any book :
       http://localhost:9008/trackStatus/6293cf77f8d4d9233a57d942


    Response JSON

    ```json
    {
        "status": "success",
        "message": "The business school has been returned"
    }
    ``

6. To return book for reading :
   http://localhost:9008/returnBook/6293cf77f8d4d9233a57d942
 

    Response JSON

    ```json
    {
        "status": true,
        "data": [
            {
                "status": "ordered",
                "timeStamp": "Mon May 30 2022 01:26:12 GMT+0530 (India Standard Time)"
            },
            {
                "status": "returned",
                "timeStamp": "Mon May 30 2022 01:26:37 GMT+0530 (India Standard Time)"
            }
        ]
    }
    ``


