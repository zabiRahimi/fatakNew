<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="-1" />

    <title>fataknew</title>

    <!-- Scripts -->


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="\css\main.css" rel="stylesheet">
    <!-- <link href="\css\navPc.css" rel="stylesheet"> -->
</head>
<body>
    <div>
            @yield('content')

    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script >
        // alert('kdkksdf')
        // var fixed=$('#navContiner').offset();
        // alert(fixed)
        // $(window).scroll(function() {
        //     //    const fixed =300;
        //     // console.log(600)

        //         if ($(document).scrollTop() > fixed.top) {
        //           //   alert('mohamad')
        //           $('#navContiner').css({"width":"100%","top":"0","position": "fixed" , "z-index": "333333"});
        //         }
        //       else{
        //           $('#navContiner').css({"position": " relative"});
        //       }
        //       });
    </script>
</body>
</html>
