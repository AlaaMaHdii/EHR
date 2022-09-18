
// Start tabel når dokumentet er klar.
$(document).ready( function () {
    $('#consults').DataTable({
        ajax: 'data_test.json',
        responsive: true,
        language: {
            url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/da.json'
        }
    });
} );