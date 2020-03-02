# migration command in terminal 

~~~bash
php artisan make:migration add_multiple_column_to_notes

~~~

# edit code in file 

~~~php
<?php
 
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
 
class AddMultipleColumnToNotes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('notes', function (Blueprint $table) {
           $table->string('short_description')->nullable();
           $table->string('type')->nullable();
           $table->string('long_description')->nullable();
 
        });
    }
 
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notes', function (Blueprint $table) {
           $table->dropColumn(['short_description',  'type', 'long_description']);
        });
    }
}
~~~
