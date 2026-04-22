# MovieCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**total_seats** | **int** |  | 

## Example

```python
from openapi_client.models.movie_create import MovieCreate

# TODO update the JSON string below
json = "{}"
# create an instance of MovieCreate from a JSON string
movie_create_instance = MovieCreate.from_json(json)
# print the JSON string representation of the object
print(MovieCreate.to_json())

# convert the object into a dict
movie_create_dict = movie_create_instance.to_dict()
# create an instance of MovieCreate from a dict
movie_create_from_dict = MovieCreate.from_dict(movie_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


