# openapi_client.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**book_seat_movies_movie_id_book_post**](DefaultApi.md#book_seat_movies_movie_id_book_post) | **POST** /movies/{movie_id}/book | Book Seat
[**create_movie_movies_post**](DefaultApi.md#create_movie_movies_post) | **POST** /movies/ | Create Movie
[**delete_movie_movies_movie_id_delete**](DefaultApi.md#delete_movie_movies_movie_id_delete) | **DELETE** /movies/{movie_id} | Delete Movie
[**get_bookings_movies_movie_id_bookings_get**](DefaultApi.md#get_bookings_movies_movie_id_bookings_get) | **GET** /movies/{movie_id}/bookings | Get Bookings
[**get_movies_movies_get**](DefaultApi.md#get_movies_movies_get) | **GET** /movies/ | Get Movies
[**home_get**](DefaultApi.md#home_get) | **GET** / | Home
[**test_test_get**](DefaultApi.md#test_test_get) | **GET** /test | Test


# **book_seat_movies_movie_id_book_post**
> object book_seat_movies_movie_id_book_post(movie_id, booking_create)

Book Seat

### Example


```python
import openapi_client
from openapi_client.models.booking_create import BookingCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    movie_id = 56 # int | 
    booking_create = openapi_client.BookingCreate() # BookingCreate | 

    try:
        # Book Seat
        api_response = api_instance.book_seat_movies_movie_id_book_post(movie_id, booking_create)
        print("The response of DefaultApi->book_seat_movies_movie_id_book_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->book_seat_movies_movie_id_book_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie_id** | **int**|  | 
 **booking_create** | [**BookingCreate**](BookingCreate.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_movie_movies_post**
> object create_movie_movies_post(movie_create)

Create Movie

### Example


```python
import openapi_client
from openapi_client.models.movie_create import MovieCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    movie_create = openapi_client.MovieCreate() # MovieCreate | 

    try:
        # Create Movie
        api_response = api_instance.create_movie_movies_post(movie_create)
        print("The response of DefaultApi->create_movie_movies_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_movie_movies_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie_create** | [**MovieCreate**](MovieCreate.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_movie_movies_movie_id_delete**
> object delete_movie_movies_movie_id_delete(movie_id)

Delete Movie

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    movie_id = 56 # int | 

    try:
        # Delete Movie
        api_response = api_instance.delete_movie_movies_movie_id_delete(movie_id)
        print("The response of DefaultApi->delete_movie_movies_movie_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_movie_movies_movie_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie_id** | **int**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_bookings_movies_movie_id_bookings_get**
> object get_bookings_movies_movie_id_bookings_get(movie_id)

Get Bookings

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    movie_id = 56 # int | 

    try:
        # Get Bookings
        api_response = api_instance.get_bookings_movies_movie_id_bookings_get(movie_id)
        print("The response of DefaultApi->get_bookings_movies_movie_id_bookings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_bookings_movies_movie_id_bookings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie_id** | **int**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_movies_movies_get**
> object get_movies_movies_get()

Get Movies

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get Movies
        api_response = api_instance.get_movies_movies_get()
        print("The response of DefaultApi->get_movies_movies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_movies_movies_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **home_get**
> object home_get()

Home

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Home
        api_response = api_instance.home_get()
        print("The response of DefaultApi->home_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->home_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_test_get**
> object test_test_get()

Test

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Test
        api_response = api_instance.test_test_get()
        print("The response of DefaultApi->test_test_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->test_test_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

