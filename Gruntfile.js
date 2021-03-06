module.exports = function (grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON("aws-keys.json"),
    aws_s3: {
      options: {
        accessKeyId: "<%= aws.AWSAccessKeyId %>",
        secretAccessKey: "<%= aws.AWSSecretKey %>",
        region: "us-west-1"
      },
      dist: {
        options: {
          bucket: "bundleclient"
        },
        files: [
          {
            expand: true,
            cwd: "client/dist/",
            src: ["**"],
            dest: "/scripts"
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask( 'deploy', 'aws_s3:dist' );
};

// 