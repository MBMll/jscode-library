//解析URL参数，直接替换成json格式的对象
JSON.parse(
  decodeURI(
    (location
     .search
     .replace(/^\?/g,'{"')
     .replace(/\&/g,'","')
     .replace(/\=/g, '":"')
     ||'{"":"')//防止空参数导致json解析错误
    +'"}'
  )
)
