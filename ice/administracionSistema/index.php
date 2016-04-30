<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html ng-app="icemasAdminApp" ng-controller="iceCtrl">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="../../logos_pco/favicon.png" rel="icon"/>
        <title>Icemas | Food Service</title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <!-- Bootstrap 3.3.5 -->
        <link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
        <!-- CSS PcO -->
        <link rel="stylesheet" href="../../css-pco/estilos.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="../../font-awesome/css/font-awesome.min.css">
        <!-- SWEET ALERT CSS -->
        <link href="../../css/sweetalert.css" rel="stylesheet" type="text/css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

        <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

        <!-- Theme style -->
        <link rel="stylesheet" href="../../dist/css/AdminLTE.min.css">
        <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
              page. However, you can choose any other skin. Make sure you
              apply the skin class to the body tag so the changes take effect.
        -->
        <link rel="stylesheet" href="../../dist/css/skins/skin-yellow.min.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>

    <body class="hold-transition skin-yellow sidebar-mini">
        <div class="wrapper">

            <!-- Header -->
            <header class="main-header">

                <!-- Logo -->
                <a href="index.php" class="logo">
                    <!-- mini logo for sidebar mini 50x50 pixels -->
                    <span class="logo-mini">
                        <img src="../../logos_pco/icono.png" alt="Icono"/>
                    </span>
                    <!-- logo for regular state and mobile devices -->
                    <span class="logo-lg">
                        <img src="../../logos_pco/logo.png" alt="Logo"/>
                    </span>
                </a>

                <!-- Header Navbar -->
                <nav class="navbar navbar-static-top" role="navigation">
                    <!-- Sidebar toggle button-->
                    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                </nav>
            </header>
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="main-sidebar"
                   ng-include=" 'template/menu.html'">
            </aside>

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Main content -->
                <section class="content" ng-view="">

                </section><!-- /.content -->
            </div><!-- /.content-wrapper -->

            <!-- Main Footer -->
            <footer class="main-footer">
                <div ng-include=" 'template/footer.html'"></div>
            </footer>


        </div><!-- ./wrapper -->

        <!-- REQUIRED JS SCRIPTS -->

        <!-- jQuery 2.1.4 -->
        <script src="../../plugins/jQuery/jQuery-2.1.4.min.js"></script>
        <!-- Bootstrap 3.3.5 -->
        <script src="../../bootstrap/js/bootstrap.min.js"></script>
        <!-- AdminLTE App -->
        <script src="../../dist/js/app.min.js"></script>

        <!-- LIBRERIAS -->
        <script src="../../angular/librerias/angular.min.js"></script>
        <script src="../../angular/librerias/angular-route.min.js"></script>
        <script src="../../angular/librerias/jcs-auto-validate.min.js"></script>

        <!-- CONTROLADORES -->
        <script src="controladores-navegacion/principalAdmin.js"></script>
        <script src="controladores-navegacion/navegacion.js"></script>
        <script src="controladores-navegacion/sucCtrl.js"></script>
        <script src="controladores-navegacion/clientesCtrl.js"></script>
        <script src="controladores-navegacion/ciudadesCtrl.js"></script>
        <script src="controladores-navegacion/serviciosCtrl.js"></script>
        <script src="controladores-navegacion/marcasCtrl.js"></script>
        <script src="controladores-navegacion/transferenciaCtrl.js"></script>
        <script src="controladores-navegacion/tecnicoCtrl.js"></script>
        <script src="controladores-navegacion/equiposCtrl.js"></script>
        <script src="controladores-navegacion/tServCtrl.js"></script>
        <script src="controladores-navegacion/usuarioCtrl.js"></script>
        <script src="controladores-navegacion/perfilCtrl.js"></script>

        <script src="controladores-navegacion/subirPdf.js"></script>

        <script src="servicios/ciudades_servicio.js"></script>
        <script src="servicios/tipoServicio_servicio.js"></script>
        <script src="servicios/sucursales_servicio.js"></script>
        <script src="servicios/tecnicos_servicio.js"></script>
        <script src="servicios/perfiles_servicio.js"></script>
        <script src="servicios/usuarios_servicio.js"></script>
        <script src="servicios/clientes_servicio.js"></script>
        <script src="servicios/equipos_servicio.js"></script>
        <script src="servicios/servicios_servicio.js"></script> 
        <script src="servicios/transferencias_servicio.js"></script> 


        <!-- SWEET ALERT -->
        <script src="../../angular/librerias/sweetalert.min.js"></script>

    </body>
</html>
