<template>
    <h1>Admin Page</h1>
    <br><br><br>
    <h2> Search bar</h2>
    <div class="container justify-content-left">
        <label for="">Username: </label>
        <input type="text" class="form-control" placeholder="Username">
        <br>
        <label for="">Email: </label>
        <input type="text" class="form-control" placeholder="Email">
        <br>
        <button type="button" class="btn btn-primary">Search</button>
        <br><br><br>
        <h2>List of Managers</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Access Level</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>An Khanh</td>
                    <td>user1@gmail.com</td>
                    <td>Full Access</td>
                </tr>
                <tr>
                    <td>Jin Jiayu</td>
                    <td>user2@gmail.com</td>
                    <td>Full Access</td>
                </tr>
                <tr>
                    <td>Yow Yu Xuan</td>
                    <td>user3@gmail.com</td>
                    <td>Full Access</td>
                </tr>
                <tr>
                    <td>Mu Yunchen</td>
                    <td>user4@gmail.com</td>
                    <td>Full Access</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Admin"
}
</script>

<style>

</style>