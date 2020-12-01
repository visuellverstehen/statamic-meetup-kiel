<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class Meetup extends Tags
{
    /**
     * The {{ meetup }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        // Complicated code

        return 'Hallo Meetup Kiel';
    }

    /**
     * The {{ meetup:example }} tag.
     *
     * @return string|array
     */
    public function example()
    {
        //
    }
}
