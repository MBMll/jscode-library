JSON.parse(decodeURI((location.search.replace(/^\?/g,'{"').replace(/\&/g,'","').replace(/\=/g, '":"')||'{"":"')+'"}'))
